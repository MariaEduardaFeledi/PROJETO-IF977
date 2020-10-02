import React from "react";
import "./App.css";
import NotFound from "./components/pages/NotFound/NotFound";
import Home from "./components/pages/HomePage/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import HowItWorks from "./components/pages/HowItWorks/HowItWorks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer.js/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
