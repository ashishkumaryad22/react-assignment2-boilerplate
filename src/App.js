import React from "react";
import Header from "./components/Header";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LogIn from "./components/userForm/LogIn";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
// import SignUp from "./components/userForm/SignUp";

function App() {
  const loggedIn = localStorage.getItem("loggedIn");
  console.log(loggedIn);
  return (
    <>
      <Router>
        <Header />
        {/* <SignUp /> */}
        <Switch>
          {!loggedIn && <Route exact path="/" component={LogIn} />}
          {loggedIn ? (
            <Route
              path="/general"
              render={() => (
                <Dashboard
                  key="general"
                  pageSize={9}
                  api="addfc84c662c49ac8c356eee82f21d55"
                  category="general"
                />
              )}
            />
          ) : (
            <Redirect exact from="/" to="/general" />
          )}
          {/* <Route exact path="/general">
            <Dashboard
              key="general"
              pageSize={9}
              api="8b7b7a71948a4a1e911213e1bbd1e1a7"
              category="general"
            />
          </Route> */}
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
