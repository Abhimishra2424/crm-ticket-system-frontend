import React from "react";
import "./App.css";
import { EntryPage } from "./page/EntryPage/EntryPage";
import { DefaultLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      {/* <EntryPage /> */}
      <DefaultLayout>Dashboard</DefaultLayout>
    </div>
  );
}

export default App;
