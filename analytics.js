(function() {
  const STORAGE_KEY = 'mntClickAnalytics';

  function loadAnalytics() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveAnalytics(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      // ignore storage errors
    }
  }

  function trackClick(eventId, label) {
    if (!eventId) return;
    const analytics = loadAnalytics();
    const existing = analytics[eventId] || { id: eventId, label: label || eventId, total: 0, pages: {} };
    existing.total += 1;
    const path = window.location.pathname || 'unknown';
    existing.pages[path] = (existing.pages[path] || 0) + 1;
    existing.label = label || existing.label || eventId;
    analytics[eventId] = existing;
    saveAnalytics(analytics);
  }

  function handleDocumentClick(event) {
    const target = event.target.closest('[data-track-id]');
    if (!target) return;
    const id = target.getAttribute('data-track-id');
    const label = target.getAttribute('data-track-label') || id;
    trackClick(id, label);
  }

  document.addEventListener('click', handleDocumentClick, true);
  window.mntAnalytics = { trackClick, loadAnalytics };
})();
