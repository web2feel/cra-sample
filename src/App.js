import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import logo from './logo.svg';
import "./App.css";
//import ScoreCard from "./components/ScoreCard"
// import AddPost from "./components/AddPost"
import About from "./components/About";
import Users from "./components/Users";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Counter />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
