import React, { useState } from "react";
import LoginComponent from "../../components/LoginComponent";
import ForgotComponent from "../../components/ForgotComponent";
import "./EntryPage.css";

export const EntryPage = () => {
  const [fromload, setFromload] = useState("login");

  const fromSwitch = (from) => {
    setFromload(from);
  };

  return (
    <div className="entry-page bg-light">
      {fromload === "login" && (
        <LoginComponent setFromload={setFromload} fromSwitch={fromSwitch} />
      )}
      {fromload === "forgot" && (
        <ForgotComponent setFromload={setFromload} fromSwitch={fromSwitch} />
      )}
    </div>
  );
};
