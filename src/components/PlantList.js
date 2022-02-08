import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { plantsToShow } ) {
  console.log(plantsToShow)
  return (
    <ul className="cards">
      {plantsToShow.map((plant) => (

      <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
