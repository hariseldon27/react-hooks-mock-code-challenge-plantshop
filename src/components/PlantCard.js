import React, { useState, useEffect } from "react";

function PlantCard( { plant, onUpdateSoldOut } ) {
  const { id, name, image, price } = plant
  const  [isSoldOut, setSoldOut] = useState(false)

  function handleSoldOutCheck(e) {
    setSoldOut(() => !isSoldOut)
    // console.log(e.target.value)
  }

  useEffect(() => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isSoldout: !isSoldOut,
      }),
    })
    .then((r) => r.json())
    .then((updatedSoldOutPlant) => onUpdateSoldOut(updatedSoldOutPlant))
  }, [isSoldOut])

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {/* //add ternary on click i guess? */}
      {!isSoldOut ? (
        <button onClick={handleSoldOutCheck} className="primary">In Stock</button>
      ) : (
        <button onClick={handleSoldOutCheck}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
