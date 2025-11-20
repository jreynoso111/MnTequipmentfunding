# M&T Equipment Funding web bundle

This repository contains the static HTML, CSS, and JavaScript used to present the M&T Equipment Funding marketing site, applications workflow, and inventory tools. Key pages include:

- `index.html` for the home/marketing landing page.
- `Applications.html` for application downloads and document guidance.
- `Inventory.html` and `Units for Sale.html` for representative inventory and the paginated listings view.
- `control-panel.html` for browser-based inventory administration (secured by role-based credentials).

## Local development
Open any of the HTML files directly in a browser. All data for inventory and user accounts is stored in `localStorage` and pre-seeded through `inventory-seed.js`. To reset to defaults, clear browser storage for the site.

Administrators can create additional admin or manager profiles within the control panel.

## Notes
- Inventory listings and generated VIN detail pages are built client-side; ensure browser storage is enabled.
- The site is optimized for responsive layouts and font consistency using the Inter type family.
