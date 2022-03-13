import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import "./App.css";
import Register from "./components/auth/Register";
import  Login  from "./components/auth/Login";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { Container } from "react-bootstrap";

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
