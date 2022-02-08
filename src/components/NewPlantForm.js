import React, { useState } from "react";

function NewPlantForm( { onUpdatePlantList } ) {
  const [formData, setFormData] = useState({
    name: "",
    image: "url",
    price: 0
  })


  function handleFormInput(event) {
    const name = event.target.name
    let value = event.target.value
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(event){
    event.preventDefault()
    const newPlantToAdd = {
      name: formData.name,
      image: formData.image,
      price: formData.price
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json",},
      body: JSON.stringify(newPlantToAdd),
    })
    .then((resp) => resp.json())
    .then((newlyAddedPlant) => onUpdatePlantList(newlyAddedPlant)
    )}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleFormInput}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleFormInput}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleFormInput}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
