import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/:post_id" component={Post} />
      </div>
    </BrowserRouter>
  );
}

export default App;
