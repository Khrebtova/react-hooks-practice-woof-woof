import React from "react";
import DogIcon from "./DogIcon"


function DogBar({dogs, onSelectedDog, onSetIsGood}){
    return(
        <div id="dog-bar">
            {dogs.map((dog)=> <DogIcon key={dog.id} dog={dog} onSelectedDog={onSelectedDog} onSetIsGood={onSetIsGood}/>)}
        </div>
    )
}

export default DogBar;