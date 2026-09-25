import React from "react";
export default class ErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state={error:null}; }
  static getDerivedStateFromError(error){ return {error}; }
  componentDidCatch(error,info){ console.error("GDI Dashboard rendering error",error,info); }
  render(){ if(this.state.error){ return <main className="error-page"><section><h1>GDI Dashboard could not load</h1><p>Copy the message below if support is required.</p><pre>{String(this.state.error?.stack||this.state.error)}</pre><button onClick={()=>window.location.reload()}>Reload dashboard</button></section></main>; } return this.props.children; }
}
