import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const RaceFilter = ({ raceFilter, setRaceFilter }) => {
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Filter by race"
          value={raceFilter}
          onChange={(event) => setRaceFilter(event.target.value)}
        />
      </InputGroup>
    </div>
  );
};

export default RaceFilter;
