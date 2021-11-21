import { Button } from "@material-ui/core";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TicketTable } from "../../components/TicketTable";
import data from "../../assets/data/dummytickets.json"

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button variant="contained" color="primary" size="large">
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total Tickets:50</div>
          <div>Pending Tickets:5</div>
        </Col>
      </Row>

      <Row>
        <Col className="mb-2">Recently Added Tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
            <TicketTable data={data} />
        </Col>
      </Row>
    </Container>
  );
};
