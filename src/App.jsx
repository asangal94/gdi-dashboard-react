import { useMemo, useState } from "react";
import { providers } from "./data.js";

const metricCards = [
  { key: "project", label: "Project Progress", tone: "purple" },
  { key: "edrm", label: "EDRM Progress", tone: "teal" },
  { key: "inventory", label: "Inventory Progress", tone: "blue" },
  { key: "destruction", label: "Destruction Progress", tone: "orange" }
];

const navItems = [
  { key: "overview", label: "Overview", icon: "▦" },
  { key: "soc2", label: "SOC 2", icon: "✓" },
  { key: "updates", label: "Updates", icon: "●" }
];

function clamp(value) {
  return Math.min(100, Math.max(0, Number(value) || 0));
}

function ProgressBar({ value, tone = "teal" }) {
  const safeValue = clamp(value);
  return (
    <div className="track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={safeValue}>
      <span className={`fill ${tone}`} style={{ width: `${safeValue}%` }} />
    </div>
  );
}

function Donut({ value, tone = "blue", label }) {
  const safeValue = clamp(value);
  return (
    <div className="donut-item">
      <div className={`donut donut-${tone}`} style={{ "--value": safeValue }} role="img" aria-label={`${label}: ${safeValue}% complete`}>
        <span>{safeValue}%</span>
      </div>
      <strong>{label}</strong>
      <small>Complete</small>
    </div>
  );
}

function ProviderHeader({ provider, providerId, onProviderChange, title }) {
  return (
    <header className="topbar">
      <div>
        <p className="kicker">Gaming Data Initiative</p>
        <h1>{title}</h1>
        <p className="provider-name">{provider.name} <span>({provider.abbreviation})</span></p>
      </div>
      <label className="provider-select">
        <span>Change Provider</span>
        <select value={providerId} onChange={(event) => onProviderChange(event.target.value)}>
          {providers.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>
      </label>
    </header>
  );
}

function SocCards({ soc2, detailed = false }) {
  const fields = [
    ["Scope", soc2.scope],
    ["Audit Period", soc2.auditPeriod],
    ["SOC 2 Report", soc2.report],
    ["Remediation Plan", soc2.remediationPlan],
    ["Status Update", soc2.statusUpdate],
    ["Next Fiscal Year Plan", soc2.nextFiscalYearPlan]
  ];

  return (
    <div className={`soc-cards ${detailed ? "soc-cards-detailed" : ""}`}>
      {fields.map(([label, value]) => (
        <article key={label}>
          <h3>{label}</h3>
          <p>{value || "Not available"}</p>
        </article>
      ))}
    </div>
  );
}

function Overview({ provider, latestUpdates, onNavigate }) {
  return (
    <>
      <section className="metrics-grid" aria-label="Key performance indicators">
        {metricCards.map(({ key, label, tone }) => (
          <article className="metric-card" key={key}>
            <p>{label}</p>
            <strong>{clamp(provider.metrics[key])}%</strong>
            <ProgressBar value={provider.metrics[key]} tone={tone} />
            <small>Current completion</small>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="panel inventory-panel">
          <div className="section-heading">
            <div><p className="kicker">Operational progress</p><h2>Inventory Overview</h2></div>
          </div>
          <div className="inventory-body">
            <div className="donut-group">
              <h3>Structured and Unstructured Progress</h3>
              <div className="donut-row">
                <Donut value={provider.inventory.structured} tone="teal" label="Structured" />
                <Donut value={provider.inventory.unstructured} tone="blue" label="Unstructured" />
              </div>
            </div>
            <div className="breakdown">
              <h3>Unstructured Data Inventory Breakdown</h3>
              <div className="bar-row"><span>Physical</span><ProgressBar value={provider.inventory.physical} tone="teal" /><b>{clamp(provider.inventory.physical)}%</b></div>
              <div className="bar-row"><span>Electronic</span><ProgressBar value={provider.inventory.electronic} tone="purple" /><b>{clamp(provider.inventory.electronic)}%</b></div>
            </div>
          </div>
        </article>

        <article className="panel destruction-panel">
          <div className="section-heading"><div><p className="kicker">Disposition</p><h2>Destruction Overview</h2></div></div>
          <Donut value={provider.destruction.overall} tone="orange" label="Overall" />
          <div className="bar-row"><span>Structured</span><ProgressBar value={provider.destruction.structured} tone="red" /><b>{clamp(provider.destruction.structured)}%</b></div>
          <div className="bar-row"><span>Unstructured</span><ProgressBar value={provider.destruction.unstructured} tone="orange" /><b>{clamp(provider.destruction.unstructured)}%</b></div>
        </article>
      </section>

      <section className="bottom-grid">
        <article className="panel soc-panel">
          <div className="section-heading"><h2>SOC 2 Type II Status</h2><button type="button" onClick={() => onNavigate("soc2")}>View details</button></div>
          <SocCards soc2={provider.soc2} />
        </article>
        <article className="panel updates-panel">
          <div className="section-heading"><h2>Project Progress Updates</h2><button type="button" onClick={() => onNavigate("updates")}>View details</button></div>
          <ul className="bullet-updates">
            {latestUpdates.length ? latestUpdates.map((update, index) => <li key={`${update.date}-${index}`}>{update.text}</li>) : <li>No updates are available.</li>}
          </ul>
        </article>
      </section>
    </>
  );
}

function SocDetail({ provider }) {
  return (
    <section className="detail-page">
      <article className="panel detail-intro"><div className="detail-icon">✓</div><div><p className="kicker">Detailed assurance view</p><h2>SOC 2 Type II Status</h2><p>Review the current scope, audit period, report, remediation activity, status, and next fiscal year plan.</p></div></article>
      <article className="panel"><SocCards soc2={provider.soc2} detailed /></article>
    </section>
  );
}

function UpdatesDetail({ provider }) {
  const groupedUpdates = useMemo(() => {
    return provider.updates.reduce((groups, update) => {
      const nextGroups = groups;
      if (!nextGroups[update.date]) nextGroups[update.date] = [];
      nextGroups[update.date].push(update);
      return nextGroups;
    }, {});
  }, [provider]);

  return (
    <section className="detail-page">
      <article className="panel detail-intro"><div className="detail-icon">●</div><div><p className="kicker">Complete provider history</p><h2>Project Progress Updates</h2><p>Detailed updates are grouped by reporting date, newest first.</p></div></article>
      {Object.entries(groupedUpdates).sort(([dateA], [dateB]) => dateB.localeCompare(dateA)).map(([date, updates]) => (
        <article className="panel update-history" key={date}>
          <time dateTime={date}>{new Date(`${date}T12:00:00`).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</time>
          <ul>{updates.map((update, index) => <li key={`${date}-${index}`}>{update.text}</li>)}</ul>
        </article>
      ))}
    </section>
  );
}

export default function App() {
  const [providerId, setProviderId] = useState(providers[0].id);
  const [view, setView] = useState("overview");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const provider = providers.find((item) => item.id === providerId) || providers[0];

  const latestUpdates = useMemo(() => {
    if (!provider.updates.length) return [];
    const latestDate = provider.updates.reduce((latest, update) => update.date > latest ? update.date : latest, provider.updates[0].date);
    return provider.updates.filter((update) => update.date === latestDate);
  }, [provider]);

  const titles = { overview: "Leadership Dashboard", soc2: "SOC 2 Detailed View", updates: "Project Updates Detailed View" };
  const navigate = (nextView) => {
    setView(nextView);
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <button className="mobile-menu" type="button" onClick={() => setMobileNavOpen((open) => !open)} aria-label="Toggle navigation">{mobileNavOpen ? "×" : "☰"}</button>
      <aside className={`sidebar ${mobileNavOpen ? "open" : ""}`}>
        <div className="brand" aria-label="GDI">GDI</div>
        <nav aria-label="Dashboard navigation">
          {navItems.map((item) => <button type="button" key={item.key} className={view === item.key ? "active" : ""} onClick={() => navigate(item.key)}><span className="nav-icon">{item.icon}</span><span>{item.label}</span></button>)}
        </nav>
      </aside>
      <main className="main-content">
        <div className="focus-banner">Focused dashboard for one service provider at a time</div>
        <ProviderHeader provider={provider} providerId={providerId} onProviderChange={setProviderId} title={titles[view]} />
        {view === "overview" && <Overview provider={provider} latestUpdates={latestUpdates} onNavigate={navigate} />}
        {view === "soc2" && <SocDetail provider={provider} />}
        {view === "updates" && <UpdatesDetail provider={provider} />}
        <footer>GDI Leadership Dashboard · Prototype data only · Production values will come from Dataverse</footer>
      </main>
    </div>
  );
}
