


import React from "react";


const SearchItem = () =>{
    return(
        <form className="mx-3">
            <label htmlFor="search"className="hidden" >Search Items</label>
            <input type="text" id="search" placeholder="Search Items" required className="text-3xl border-black border-double border-2 rounded-xl p-3 w-full"/>
        </form>
    );
}


export default SearchItem;