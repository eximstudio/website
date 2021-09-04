import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Link to="/about">
        <button>About</button>
      </Link>
      
        <div className="App">
            <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    <header className="App-header">
      </header>
    </div>
       </Router>
  );
}

export default App;
