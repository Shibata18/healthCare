import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/Login2.js";
import LoginPage2 from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import RegisterDoctorPage from "./views/RegisterDoctorPage/";
import ChatPage from "./views/ChatPage/ChatPage"
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div className="content_wrapper" style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/chat" component={Auth(ChatPage, null)} />
          <Route exact path="/loginUser" component={Auth(LoginPage, false)} />
          <Route exact path="/login" component={Auth(LoginPage2, false)} />
          <Route exact path="/registerUser" component={Auth(RegisterPage, false)} />
          <Route exact path="/register" component={Auth(RegisterDoctorPage, false)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;