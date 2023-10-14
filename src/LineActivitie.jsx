
import React from "react";
import { FaTrashAlt } from 'react-icons/fa';

const LineActivitie = ({activitie,handleCheck,handleDelete}) => {
        return(
            <li className="bg-indigo-100 flex flex-row gap-2 p-5 mb-0 items-center">
                <input type="checkbox" name="activitie" id="activitie" onChange={() => handleCheck(activitie.id)} className="w-12 h-12" checked={activitie.checked} />
                <label style={(activitie.checked) ? { textDecoration: 'line-through' } : null } className="text-xl text-left grow">{activitie.Activitie} </label>
                <FaTrashAlt className="w-12 h-12 hover:text-slate-500"
                role="button"
                tabIndex="0"
                aria-label={`Delete ${activitie.activitie}`}
                onClick={()=> handleDelete(activitie.id)}
                />
            </li>
        );
}


export default LineActivitie;