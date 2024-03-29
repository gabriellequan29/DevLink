import React, { useEffect } from "react";
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
import AddProject from "./components/profile/AddProject";
import UpdateEducation from "./components/profile/UpdateEducation";
import UpdateExperience from "./components/profile/UpdateExperience";
import UpdateProject from "./components/profile/UpdateProject";
import ProfilesScreen from "./components/profiles/ProfilesScreen";
import ProfileScreen from "./components/profiles/ProfileScreen";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import NotFound from "./components/layout/NotFound";
import Alert from "./components/layout/Alert";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/userActions";

const App = () => {

  useEffect(() => {

    store.dispatch(loadUser());

  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Alert />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profiles" element={<ProfilesScreen />} />
          <Route path="/profile/:id" element={<ProfileScreen />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/create-profile" element={<PrivateRoute />}>
            <Route path="/create-profile" element={<ProfileForm />} />
          </Route>
          <Route path="/edit-profile" element={<PrivateRoute />}>
            <Route path="/edit-profile" element={<ProfileForm />} />
          </Route>
          <Route path="/add-education" element={<PrivateRoute />}>
            <Route path="/add-education" element={<AddEducation />} />
          </Route>
          <Route path="/edit-education/:id" element={<PrivateRoute />}>
            <Route path="/edit-education/:id" element={<UpdateEducation />} />
          </Route>
          <Route path="/add-experience" element={<PrivateRoute />}>
            <Route path="/add-experience" element={<AddExperience />} />
          </Route>
          <Route path="/edit-experience/:id" element={<PrivateRoute />}>
            <Route path="/edit-experience/:id" element={<UpdateExperience />} />
          </Route>
          <Route path="/add-project" element={<PrivateRoute />}>
            <Route path="/add-project" element={<AddProject />} />
          </Route>
          <Route path="/edit-project/:id" element={<PrivateRoute />}>
            <Route path="/edit-project/:id" element={<UpdateProject />} />
          </Route>
          <Route path="/posts" element={<PrivateRoute />}>
            <Route path="/posts" element={<Posts />} />
          </Route>
          <Route path="/posts/:id" element={<PrivateRoute />}>
            <Route path="/posts/:id" element={<Post />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
