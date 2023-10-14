

import React from "react";


const Footer = ({length}) =>{
    return(
        <footer className="bg-cyan-700">
                <h1 className="text-white text-center text-xl p-3">{`There is ${length} activitie to do`}</h1>
        </footer>
    );      
}



export default Footer;