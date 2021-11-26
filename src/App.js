import React from "react";
import "./App.css";
import { EntryPage } from "./page/EntryPage/EntryPage";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./page/Dashboard/Dashboard";
import { AddTicketPage } from "./page/NewTicket/AddTicketPage";

function App() {
  return (
    <div className="App">
      {/* <EntryPage /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicketPage />
      </DefaultLayout>
    </div>
  );
}

export default App;
