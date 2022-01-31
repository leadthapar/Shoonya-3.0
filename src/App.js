import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Event from "./components/Events/Events";
import Footer from "./components/Footer";

import Resume from "./components/Sponsors/Resume";

import Schedule from "./components/Schedule/schedule"
import Faq from "./components/FAQ/faq"
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/event" component={Event} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />

          <Route path="/Sponsors" component={Resume} />

          <Route path="/schedule" component={Schedule} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
