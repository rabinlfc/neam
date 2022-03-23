import logo from "./logo.svg";
import background_image from "./background_image.jpeg";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Events from "./components/pages/Events";
import News from "./components/pages/News";
import Login from "./components/pages/Login";
import AboutUs from "./components/pages/Aboutus";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events" exact component={Events} />
        <Route path="/news" exact component={News} />
        <Route path="/login" exact component={Login} />
        <Route path="/about-us" exact component={AboutUs} />
      </Switch>
    </Router>
  );
}

export default App;

// {/* <div className="App">
// <header className="App-header">
// </header>
//    <div className="Homepage">
//    <i></i>
//    {/* <img src={NEAMLogo} className="Logo-header"/> */}
//    </div>
//  </div> */}
