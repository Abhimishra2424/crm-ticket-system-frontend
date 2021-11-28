import React from "react";
import "./App.css";
// import { EntryPage } from "./page/EntryPage/EntryPage";
import { DefaultLayout } from "./layout/DefaultLayout";
// import { Dashboard } from "./page/Dashboard/Dashboard";
// import { AddTicketPage } from "./page/NewTicket/AddTicketPage";
// import { TicketListsPage } from "./page/TicketListing/TicketListsPage";
import { Ticket } from "./page/Ticket/Ticket";

function App() {
  return (
    <div className="App">
      {/* <EntryPage /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicketPage /> */}
        {/* <TicketListsPage /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
