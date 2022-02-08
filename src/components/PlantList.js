import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { plantsToShow, onUpdateSoldOut } ) {
  return (
    <ul className="cards">
      {plantsToShow.map((plant) => (

      <PlantCard onUpdateSoldOut={onUpdateSoldOut} key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
