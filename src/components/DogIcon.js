import React from "react";

function DogIcon({dog, onSelectedDog, onSetIsGood}){
    const handleClick =()=>{
        onSelectedDog(dog)
        onSetIsGood(dog.isGoodDog)
    }
    
    return(
        <span onClick={handleClick}>{dog.name}</span>
    )
}

export default DogIcon;