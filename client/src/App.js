import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import ProfileForm from "./components/profile/ProfileForm";
import PrivateRoute from "./components/routing/PrivateRoute";
import AddEducation from "./components/profile/AddEducation";
import AddExperience from "./components/profile/AddExperience";
import ProfilesScreen from "./components/profiles/ProfilesScreen";
import ProfileScreen from "./components/profiles/ProfileScreen";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profiles" element={<ProfilesScreen />} />
        <Route path="/profile/:id" element={<ProfileScreen />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
        <Route
          path="create-profile"
          element={<PrivateRoute component={ProfileForm} />}
        />
        <Route
          path="edit-profile"
          element={<PrivateRoute component={ProfileForm} />}
        />
        <Route
          path="add-education"
          element={<PrivateRoute component={AddEducation} />}
        />
        <Route
          path="add-experience"
          element={<PrivateRoute component={AddExperience} />}
        />
      </Routes>
    </Router>
  </Provider>
);

export default App;
