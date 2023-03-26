import React, { useState } from "react";
import ActionsBar from "../components/ActionsBar";
import PetList from "../components/PetList";

const MainPage = () => {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Fido",
      race: "Dog",
      type: "Mammal",
      location: "Boulder, CO",
    },
    {
      id: 2,
      name: "Fluffy",
      race: "Cat",
      type: "Mammal",
      location: "Boulder, CO",
    },
    {
      id: 3,
      name: "Bubbles",
      race: "Fish",
      type: "Fish",
      location: "Tampa, FL",
    },
  ]);
  const [typeFilter, setTypeFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [raceFilter, setRaceFilter] = useState("");

  const filteredPets = () =>
    pets.filter((pet) => {
      return (
        pet.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
        pet.type.toLowerCase().includes(typeFilter.toLowerCase()) &&
        pet.race.toLowerCase().includes(raceFilter.toLowerCase())
      );
    });

  const addNewPet = (newPet) => {
    setPets([
      ...pets,
      {
        id: pets.length + 1,
        ...newPet,
      },
    ]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <ActionsBar
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        raceFilter={raceFilter}
        setRaceFilter={setRaceFilter}
        addNewPet={addNewPet}
      />
      <PetList list={filteredPets(pets)} />
    </div>
  );
};

export default MainPage;
