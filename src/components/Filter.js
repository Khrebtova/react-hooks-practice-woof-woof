import React from "react";

function Filter({isOn, onHandleFilter}){
    return(
        <div id="filter-div">
            <button id="good-dog-filter" onClick={onHandleFilter}>
                {isOn ? "Filter good dogs: ON" : "Filter good dogs: OFF"}
            </button>
        </div>
    )
}

export default Filter;