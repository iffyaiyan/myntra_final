import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Design from "./Design";
import Login from "./Login";
import Payment from "./Payment";
import Footer from "./Footer";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import 'bootstrap/dist/css/bootstrap.min.css';
import Pubtotal from "./Pubtotal";
import Private from "./Private";

const promise = loadStripe('pk_test_51Jt4yCSEEakZ49GqWZREGicQrNzOpmzDUPPjpnghfgDfBCKngkG3fLcqAqKnIo7l3aWOQmB1Rmc2SJvqG2bEfKv400DBoTKuvq')

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          {/* extra */}
          <Route path="/pub">
            <Header />
            <Pubtotal />
          </Route>

          <Route path="/pri">
            <Header />
            <Private />
          </Route>

          <Route path="/design">
            <Header />
            <Design />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/">
            <Header />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
