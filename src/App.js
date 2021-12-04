import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { EntryPage } from "./page/EntryPage/EntryPage";
import { Dashboard } from "./page/Dashboard/Dashboard";
import { AddTicketPage } from "./page/NewTicket/AddTicketPage";
import { TicketListsPage } from "./page/TicketListing/TicketListsPage";
import { Ticket } from "./page/Ticket/Ticket";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <EntryPage />
          </Route>
          <PrivateRoute path="/dashboard" exact>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/add-ticket" exact>
            <AddTicketPage />
          </PrivateRoute>
          <PrivateRoute path="/tickets" exact>
            <TicketListsPage />
          </PrivateRoute>
          <PrivateRoute path="/ticket/:tId" exact>
            <Ticket />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
