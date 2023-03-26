import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const NameFilter = ({ nameFilter, setNameFilter }) => {
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Filter by name"
          value={nameFilter}
          onChange={(event) => setNameFilter(event.target.value)}
        />
      </InputGroup>
    </div>
  );
};

export default NameFilter;
