import React from "react";
import LineActivitie from "./LineActivitie";


const ActivitiesList = ({Activities,setActivities,handleCheck,handleDelete}) => {
    return(
        <ul className="flex flex-col m-4 gap-8">
            {
                Activities.map((activitie) => (
                    <LineActivitie key={activitie.id} activitie={activitie} handleCheck={handleCheck} handleDelete={handleDelete}/>
                ))
            }
        </ul>
    );
}


export default ActivitiesList;