import React from "react";
import PetCard from "./PetCard";

const PetList = ({ list }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      {list.map((pet) => (
        <PetCard key={pet.id} {...pet} />
      ))}
    </div>
  );
};

export default PetList;
