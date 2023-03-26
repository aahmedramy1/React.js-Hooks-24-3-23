import React from "react";
import NameFilter from "./NameFilter";
import RaceFilter from "./RaceFilter";
import TypeFilter from "./TypeFilter";

const Filters = ({
  nameFilter,
  typeFilter,
  raceFilter,
  setNameFilter,
  setTypeFilter,
  setRaceFilter,
}) => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <NameFilter nameFilter={nameFilter} setNameFilter={setNameFilter} />
      <TypeFilter typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
      <RaceFilter raceFilter={raceFilter} setRaceFilter={setRaceFilter} />
    </div>
  );
};

export default Filters;
