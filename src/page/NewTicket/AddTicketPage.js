import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Col, Row } from "react-bootstrap";
import { AddTicketForm } from "../../components/AddTicketForm";

export const AddTicketPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Row>
          <Col>
            <AddTicketForm />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
