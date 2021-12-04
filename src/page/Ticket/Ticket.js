import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import tickets from "../../assets/data/dummytickets.json";
import { MessageHistory } from "../../components/MessageHistory";
import { UpdateTicket } from "../../components/UpdateTicket";
import { useParams } from "react-router-dom";

// const ticket = tickets[0];

export const Ticket = () => {
  const { tId } = useParams();
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id == tId) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [tId]);

  return (
    <Container>
      <Row>
        <Col>Ticket</Col>
      </Row>
      <Row>
        <Col className="font-weight-bolder text-secondary">
          <div className="subject">Subject:{ticket.subject}</div>
          <div className="date">Ticket Opened:{ticket.addedAt}</div>
          <div className="status">Status:{ticket.status}</div>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <Button variant="contained" color="primary">
            close ticket
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket />
        </Col>
      </Row>
    </Container>
  );
};
