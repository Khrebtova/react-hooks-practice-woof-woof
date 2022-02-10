import React from "react";

function DogDetails({dog, isGood, onSetIsGood, onUpdateDogs}){
    const {id, name, image} = dog
    
    const handleGoodDogBtn = ()=>{
        onSetIsGood(isGood => !isGood)
        fetch(`http://localhost:3001/pups/${id}`, {
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({"isGoodDog": !isGood})
        })
        .then(r=>r.json())
        .then(data=>onUpdateDogs(data))
    }
    

    return(
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info">
                <img src={image} alt={name} />
                <h2>{name}</h2>
                {dog.name ? <button onClick={handleGoodDogBtn}>{isGood ? "Good Dog!" : "Bad Dog "}</button> : null}
            </div>
        </div>
    )
}

export default DogDetails; 