import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const TypeFilter = ({ typeFilter, setTypeFilter }) => {
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Filter by type"
          value={typeFilter}
          onChange={(event) => setTypeFilter(event.target.value)}
        />
      </InputGroup>
    </div>
  );
};

export default TypeFilter;
