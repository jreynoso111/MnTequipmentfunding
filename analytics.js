(function() {
  const STORAGE_KEY = 'mntClickAnalytics';

  function baseState() {
    return {
      events: {},
      listings: {},
      meta: {
        totalClicks: 0,
        firstRecordedAt: null,
        lastRecordedAt: null
      }
    };
  }

  function normalizeData(raw) {
    const base = baseState();
    if (!raw || typeof raw !== 'object') return base;

    // Support legacy shape where events were stored at the root object
    if (!raw.events) {
      const values = Object.values(raw || {});
      const looksLikeEvents = values.every(v => v && typeof v === 'object' && 'id' in v);
      if (looksLikeEvents) {
        raw = { events: raw };
      }
    }

    const events = raw.events && typeof raw.events === 'object' ? raw.events : {};
    const listings = raw.listings && typeof raw.listings === 'object' ? raw.listings : {};
    const meta = raw.meta && typeof raw.meta === 'object' ? raw.meta : {};

    return {
      events,
      listings,
      meta: {
        totalClicks: Number(meta.totalClicks) || 0,
        firstRecordedAt: meta.firstRecordedAt || null,
        lastRecordedAt: meta.lastRecordedAt || null
      }
    };
  }

  function loadAnalytics() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return normalizeData(raw ? JSON.parse(raw) : null);
    } catch (e) {
      return baseState();
    }
  }

  function saveAnalytics(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      // ignore storage errors
    }
  }

  function trackClick(eventId, label, listingData) {
    if (!eventId) return;
    const data = loadAnalytics();
    const now = new Date().toISOString();
    const path = window.location.pathname || 'unknown';

    data.meta.firstRecordedAt = data.meta.firstRecordedAt || now;
    data.meta.lastRecordedAt = now;
    data.meta.totalClicks = (Number(data.meta.totalClicks) || 0) + 1;

    const events = data.events;
    const existing = events[eventId] || { id: eventId, label: label || eventId, total: 0, pages: {}, lastClickedAt: null };
    existing.total = (Number(existing.total) || 0) + 1;
    existing.pages[path] = (Number(existing.pages[path]) || 0) + 1;
    existing.label = label || existing.label || eventId;
    existing.lastClickedAt = now;
    events[eventId] = existing;

    if (listingData && listingData.id) {
      const listings = data.listings;
      const listingId = listingData.id;
      const existingListing = listings[listingId] || {
        id: listingId,
        title: listingData.title || '',
        price: listingData.price || '',
        location: listingData.location || '',
        totalClicks: 0,
        events: {},
        lastClickedAt: null
      };
      existingListing.totalClicks = (Number(existingListing.totalClicks) || 0) + 1;
      existingListing.title = listingData.title || existingListing.title;
      existingListing.price = listingData.price || existingListing.price;
      existingListing.location = listingData.location || existingListing.location;
      existingListing.events[eventId] = (Number(existingListing.events[eventId]) || 0) + 1;
      existingListing.lastClickedAt = now;
      listings[listingId] = existingListing;
    }

    saveAnalytics(data);
  }

  function handleDocumentClick(event) {
    const target = event.target.closest('[data-track-id]');
    if (!target) return;
    const id = target.getAttribute('data-track-id');
    const label = target.getAttribute('data-track-label') || id;

    const listingId = target.getAttribute('data-listing-id');
    const listingTitle = target.getAttribute('data-listing-title');
    const listingPrice = target.getAttribute('data-listing-price');
    const listingLocation = target.getAttribute('data-listing-location');

    const listingData = listingId
      ? { id: listingId, title: listingTitle, price: listingPrice, location: listingLocation }
      : null;

    trackClick(id, label, listingData);
  }

  document.addEventListener('click', handleDocumentClick, true);
  window.mntAnalytics = { trackClick, loadAnalytics };
})();
