import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("GDI Dashboard rendering error", error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <main className="error-page">
          <section>
            <h1>GDI Dashboard could not load</h1>
            <p>The application encountered a rendering error. Copy the message below if support is required.</p>
            <pre>{String(this.state.error?.stack || this.state.error)}</pre>
            <button type="button" onClick={() => window.location.reload()}>Reload dashboard</button>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}
