import React, { useState } from "react";
import AddPet from "./AddPet";
import Filters from "./Filters";
import Button from "react-bootstrap/Button";

const ActionsBar = ({
  nameFilter,
  typeFilter,
  raceFilter,
  setNameFilter,
  setTypeFilter,
  setRaceFilter,
  addNewPet,
}) => {
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Filters
        nameFilter={nameFilter}
        typeFilter={typeFilter}
        raceFilter={raceFilter}
        setNameFilter={setNameFilter}
        setTypeFilter={setTypeFilter}
        setRaceFilter={setRaceFilter}
      />
      <Button variant="primary" onClick={handleOpen}>
        Add new pet
      </Button>
      <AddPet show={show} handleClose={handleClose} addNewPet={addNewPet} />
    </div>
  );
};

export default ActionsBar;
