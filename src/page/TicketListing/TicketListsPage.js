import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { SearchTextInput } from "../../components/SearchTextInput";
import { TicketTable } from "../../components/TicketTable";
import data from "../../assets/data/dummytickets.json";

export const TicketListsPage = () => {
  const [str, setStr] = useState("");
  const [dispTicket, setDispTicket] = useState(data);

  useEffect(() => {}, [str, dispTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const filteredData = data.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );

    setDispTicket(filteredData);
    console.log(str);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h4>Ticket Lists Page</h4>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <Button variant="contained" color="primary" size="small">
            Add New Ticket
          </Button>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <SearchTextInput handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable data={dispTicket} />
        </Col>
      </Row>
    </Container>
  );
};
