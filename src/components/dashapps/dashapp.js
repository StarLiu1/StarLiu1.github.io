// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function DashApp() {
  return (
    <iframe
      src="/api/dash_app"
      style={{ width: '100%', height: '500px', border: 'none' }}
      title="Dash App"
    ></iframe>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dash" component={DashApp} />
      </Switch>
    </Router>
  );
}

export default App;
