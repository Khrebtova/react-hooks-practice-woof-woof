import React, {useState, useEffect} from "react";
import DogBar from "./DogBar";
import DogDetails from "./DogDetails"
import Filter from "./Filter";

function App() {
  const [dogs, setDogs] = useState([])
  const [dogsToDisplay, setDogsToDisplay] = useState([])
  const [selectedDog, setSelectedDog]=useState({})
  const [isGood, setIsGood] = useState()
  const [filterGoodDogs, setFilterGoodDogs] = useState(false)
  

  useEffect(()=>{
    fetch("http://localhost:3001/pups")
    .then(r => r.json())
    .then(data => {
      setDogsToDisplay(data)
      setDogs(data)
    })
  }, [])

  const updateDogs = (updatedDog)=>{
    setDogsToDisplay(dogsToDisplay.map((dog)=> dog.id===updatedDog.id ? updatedDog : dog))
  }

  const handleFilter=()=>{
    if(filterGoodDogs===false){
      setDogsToDisplay(dogsToDisplay.filter((dog) => dog.isGoodDog === true))
    }else{
      setDogsToDisplay(dogs)
    }
    
    setFilterGoodDogs(filterGoodDogs => !filterGoodDogs)
  }
    

  return (
    <div className="App">
      <Filter isOn={filterGoodDogs} onHandleFilter={handleFilter}/>
      
      {/* <div id="filter-div">
        <button id="good-dog-filter" onClick={handleFilter}>{filterGoodDogs ? "Filter good dogs: ON" : "Filter good dogs: OFF"}</button>
      </div>  */}
      
      <DogBar dogs={dogsToDisplay} onSelectedDog={setSelectedDog} onSetIsGood={setIsGood}/>
      <DogDetails dog ={selectedDog} isGood={isGood} onSetIsGood={setIsGood} onUpdateDogs={updateDogs}/>
     
    </div>
  );
}

export default App;
