import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

export const SearchTextInput = ({ handleOnChange, str }) => {
  console.log(`str`, str);
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Search
          </Form.Label>
          <Col sm="9">
            <Form.Control
              value={str}
              onChange={handleOnChange}
              name="searchStr"
              placeholder="Search"
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

SearchTextInput.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};
