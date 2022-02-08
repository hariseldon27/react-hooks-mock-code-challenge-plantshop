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

  function updateSoldOutPlants(updatedPlant) {
      const updatedSoldOutPlants = plantList.map((plant) => {
        if(plant.id === updatedPlant.id) {
          return updatedPlant;
        } else {
          return plant
        }
      });
      //then we set all the items in state with the new array
      setPlantList(updatedSoldOutPlants)
    }
  


  return (
    <main>
      <NewPlantForm onUpdatePlantList={updatePlantList}/>
      <Search />
      <PlantList plantsToShow={plantList} onUpdateSoldOut={updateSoldOutPlants}/>
    </main>
  );
}

export default PlantPage;
