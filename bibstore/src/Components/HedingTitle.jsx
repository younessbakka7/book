import React from 'react';

const HedingTitle = ({title}) => {
    return (
        <div style={divStyle}>
            <h1 style={h1Style}>{title}</h1>

        </div>
       
    );
   
}
const divStyle = {
        padding:"20px",
   
        
}
const h1Style = {
    color:"blue",
    fontSize:"35px",
    fontWeight: "500" ,
    borderBottom:"2px solid blue",
    width:"max-content"
}


export default HedingTitle;
