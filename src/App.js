import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main'
import Navbar from './components/Nav/Navbar';

function App() {
  return (
    <Router>
      <div class="container">
        <Navbar />
        <Switch>
          <Route path="/*" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
