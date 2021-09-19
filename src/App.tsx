import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import _404 from "./components/404";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Viewer from "./components/Viwer";

if (
  localStorage.dark === "true" ||
  (!("dark" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)")?.matches)
) {
  document.documentElement.classList.add("dark-theme");
} else {
  document.documentElement.classList.remove("dark-theme");
}

function App(): React.ReactElement {
  return (
    <Router>
      <div className="App">
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
          <Route path="/view/:id">
            <Viewer />
          </Route>
          <Route path="/view">
            <Viewer />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <_404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
