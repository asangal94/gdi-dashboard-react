export const providers = [
  {
    id: "gce",
    name: "Great Canadian Entertainment",
    abbreviation: "GCE",
    metrics: { project: 41, edrm: 26, inventory: 52, destruction: 8 },
    inventory: { structured: 0, unstructured: 52, physical: 82, electronic: 22 },
    destruction: { overall: 8, structured: 0, unstructured: 25 },
    soc2: {
      scope: "Core Gaming Systems and Sensitive Data",
      auditPeriod: "Jan 1 – Mar 31; Jun 1 – Jun 30, 2026",
      report: "Report Received May 30, 2026",
      remediationPlan: "Plan Received Jun 30, 2026",
      statusUpdate: "Under review with OLG",
      nextFiscalYearPlan: "Full SOC 2 Type II assessment"
    },
    updates: [
      { date: "2026-07-10", text: "Unstructured physical inventory is 82% complete; GTA inventory activities remain on track." },
      { date: "2026-07-10", text: "EMS inventory is nearing completion and planning activities are complete." },
      { date: "2026-07-10", text: "The first draft of the electronic inventory report is ready for review." },
      { date: "2026-07-08", text: "Inventory validation continued across business areas." },
      { date: "2026-07-05", text: "Initial planning activities were completed." }
    ]
  },
  {
    id: "sample",
    name: "Sample Service Provider",
    abbreviation: "SSP",
    metrics: { project: 58, edrm: 63, inventory: 71, destruction: 34 },
    inventory: { structured: 62, unstructured: 77, physical: 88, electronic: 66 },
    destruction: { overall: 34, structured: 28, unstructured: 41 },
    soc2: {
      scope: "Enterprise Records Environment",
      auditPeriod: "Apr 1 – Jun 30, 2026",
      report: "Evidence collection underway",
      remediationPlan: "No critical actions identified",
      statusUpdate: "Fieldwork in progress",
      nextFiscalYearPlan: "Expand assessment scope"
    },
    updates: [
      { date: "2026-08-21", text: "Inventory validation was completed for three business units." },
      { date: "2026-08-21", text: "Destruction readiness review actions were assigned." },
      { date: "2026-08-14", text: "The SOC 2 evidence package was submitted for review." }
    ]
  }
];
