import React from "react"
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';



const AddItem = ({newActivitie,setnewActivitie,handleSubmit}) =>{
    const inputRef = useRef();
    return(
        <form onSubmit={handleSubmit} className="flex flex-row m-3 justify-start gap-2 items-center">
            <label htmlFor='addItem' className="hidden">Add Item</label>
            <input
                autoFocus
                id='addItem'
                type='text'
                ref={inputRef}
                placeholder='Add Item'
                required
                onChange={(e) => setnewActivitie(e.target.value)}
                value={newActivitie}
                className="text-3xl border-black border-double border-2 rounded-xl p-3 grow"
            />

            <button type='submit' aria-label='Add Item' onClick={() => inputRef.current.focus()}>
                 <FaPlus />
            </button>
        </form>
    );
}   


export default AddItem;