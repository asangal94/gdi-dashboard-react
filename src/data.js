const soc2History = {
  F27: { scope: "Core Gaming Systems and Sensitive Data", auditPeriod: "Jan 1 – Mar 31; Jun 1 – Jun 30, 2026", report: "Report received May 30, 2026", remediationPlan: "Plan received Jun 30, 2026", statusUpdate: "Under review with OLG", nextFiscalYearScope: "Full SOC 2 Type II assessment" },
  F26: { scope: "Gaming platform controls and sensitive records", auditPeriod: "Apr 1, 2025 – Mar 31, 2026", report: "Report received May 28, 2025", remediationPlan: "Remediation actions completed", statusUpdate: "Fiscal review closed", nextFiscalYearScope: "Expand evidence validation" },
  F25: { scope: "Priority technology controls", auditPeriod: "Apr 1, 2024 – Mar 31, 2025", report: "Report received June 5, 2024", remediationPlan: "Three actions tracked to closure", statusUpdate: "Completed", nextFiscalYearScope: "Include additional applications" },
  F24: { scope: "Initial SOC 2 readiness scope", auditPeriod: "Apr 1, 2023 – Mar 31, 2024", report: "Readiness report completed", remediationPlan: "Foundational control plan established", statusUpdate: "Archived", nextFiscalYearScope: "Move to Type II assessment" }
};

export const providers = [
  {
    id: "gce", name: "Great Canadian Entertainment", abbreviation: "GCE",
    metrics: { project: 41, edrm: 26, inventory: 52, destruction: 8 },
    inventory: { structured: 0, unstructured: 52, physical: 82, electronic: 22 },
    destruction: { overall: 8, structured: 0, unstructured: 25 },
    soc2History,
    updates: [
      { date: "2026-07-10", text: "Unstructured physical inventory is 82% complete; GTA inventory activities remain on track. EMS inventory is nearing completion, planning activities are complete, and the first draft of the electronic inventory report is ready for review. The team is coordinating validation of the remaining records, confirming ownership, and preparing the next reporting package for stakeholder review." },
      { date: "2026-07-10", text: "Structured inventory dependencies are being reviewed with the service provider. Open items have been documented and will be monitored through the next reporting cycle." },
      { date: "2026-07-08", text: "Earlier inventory validation update." }
    ]
  },
  {
    id: "sample", name: "Sample Service Provider", abbreviation: "SSP",
    metrics: { project: 58, edrm: 63, inventory: 71, destruction: 34 },
    inventory: { structured: 62, unstructured: 77, physical: 88, electronic: 66 },
    destruction: { overall: 34, structured: 28, unstructured: 41 },
    soc2History,
    updates: [
      { date: "2026-08-21", text: "Inventory validation was completed for three business units. Destruction readiness actions were assigned, and the project team is reviewing the evidence package before the next governance checkpoint." },
      { date: "2026-08-14", text: "The SOC 2 evidence package was submitted for review." }
    ]
  }
];
