# GDI Leadership Dashboard

A responsive React and Vite prototype for the Gaming Data Initiative leadership dashboard.

## Included

- Four KPI cards ordered Project, EDRM, Inventory, and Destruction
- Structured and Unstructured doughnut charts
- Physical and Electronic horizontal progress bars
- SOC 2 overview cards and detailed view
- Latest-date-only bullet updates on Overview
- Complete dated update history in the Updates view
- Overview, SOC 2, and Updates navigation
- Provider switching using illustrative data
- Responsive desktop and mobile layouts
- Visible error screen if React encounters a rendering problem
- Automated GitHub Pages deployment

## Publish with GitHub Pages

1. Upload all repository files to GitHub.
2. Open repository **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for `Deploy GDI Dashboard to GitHub Pages` to finish.
5. Open the website URL shown by the completed deployment.

Every push to the `main` branch automatically rebuilds and republishes the dashboard.

## Optional local development

```bash
npm ci
npm run dev
```

## Important

The current data is illustrative. Do not add Dataverse secrets, passwords, access tokens, or confidential production records to the repository. GitHub Pages is for UI review. The production Entra ID and Dataverse version should be hosted in an organization-approved environment.
