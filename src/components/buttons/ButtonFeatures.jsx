import React from 'react'
import "./ButtonFeatures.scss"
function ButtonFeatures({icon,name}) {
  return (
    <div className="info-button"
     style={
        name=="Info"?{ 
            backgroundColor:"rgb(188, 188, 191)",
            color:"white"
        }:{ 
            border: "solid 0.5px black"
        }
    }>
    {icon}
    <span>{name}</span>
  </div>
  )
}

export default ButtonFeatures