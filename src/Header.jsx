

import React from "react";


const Header = ({title}) =>{
    return(
        <header className="bg-cyan-700 m-0">
            <h1 className="text-white font-bold text-left text-5xl p-3">{title}</h1>
        </header>
    );
}


export default Header;