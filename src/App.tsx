import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Search from "./components/Search";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

function App() {
  return (
    <Router>
      <OverlayScrollbarsComponent
        options={{
          // paddingAbsolute: true
          sizeAutoCapable: true,
          scrollbars: {
            visibility: "visible",
            clickScrolling: true,
            autoHide: "never",
          },
        }}
      >
        <div className="App dark:bg-gray-900 min-h-screen">
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
      </OverlayScrollbarsComponent>
    </Router>
  );
}

export default App;
