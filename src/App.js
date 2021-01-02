import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Experience from "./components/pages/Experience";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/experience" component={Experience} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
