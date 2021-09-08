import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Search from "./components/Search";
import PerfectScrollbar from "react-perfect-scrollbar";

function App() {
  return (
    <Router>
      <PerfectScrollbar options={{ wheelSpeed: 0.5 }}>
        <div className="App bg-white dark:bg-gray-900 ">
          <Nav />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </PerfectScrollbar>
    </Router>
  );
}

export default App;
