import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((plantData) => setPlantList(plantData))
  },[])

  function updatePlantList(newlyAddedPlant) {
    setPlantList([...plantList, newlyAddedPlant])
  }


  return (
    <main>
      <NewPlantForm onUpdatePlantList={updatePlantList}/>
      <Search />
      <PlantList plantsToShow={plantList} />
    </main>
  );
}

export default PlantPage;
