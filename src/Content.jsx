import React from "react";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import ActivitiesList from "./ItemList";



const Content = ({Activities,setActivities,search,setSearch,newActivitie,setnewActivitie,handleCheck,handleDelete,handleSubmit}) =>{
    return(
        <main className="my-1">
             <AddItem newActivitie={newActivitie} setnewActivitie={setnewActivitie} handleSubmit={handleSubmit}/>
             <SearchItem />
             <ActivitiesList Activities={Activities} setActivities={setActivities} handleCheck={handleCheck} handleDelete={handleDelete}/> 
        </main>
    );
}

export default Content