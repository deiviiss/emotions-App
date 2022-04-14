import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@containers/Layout";

import Home from "@pages/Home";
import Login from "@pages/Login";
import RecoveryPassword from "@pages/RecoveryPassword";
import SendEmail from "@pages/SendEmail.jsx";
import NewPassword from "@pages/NewPassword.jsx";
import MyAccount from "@pages/MyAccount.jsx";
import CreateAccount from "@pages/CreateAccount.jsx";
import NotFound from "@pages/NotFound";

import "@styles/_global.css";

const App = () => {
  return (
    <BrowserRouter basename="/emotions-App">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/recovery-password"
            element={<RecoveryPassword />}
          />
          <Route exact path="/send-email" element={<SendEmail />} />
          <Route exact path="/new-password" element={<NewPassword />} />
          <Route exact path="/account" element={<MyAccount />} />
          <Route exact path="/signup" element={<CreateAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
