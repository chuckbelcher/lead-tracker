import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Leads from './components/Leads/Leads'
import Navbar from './components/Nav/Navbar';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" component={Leads} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
