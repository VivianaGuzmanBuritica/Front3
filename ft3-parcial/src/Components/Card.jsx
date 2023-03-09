import React from 'react'
import './Card.css'

const Cards = ({nombre, edad, estacion}) => {

 
  let content;
  return (

  
    <div className='card'>
      <h3></h3>
        <p>Edad: {edad}</p>
        <p>Nombre : {nombre}</p>
        {estacion == "Primavera" ? ( <p className='primavera'>Estacion : {estacion}</p>)
        : estacion == "Verano" ? ( <p className='verano'>Estacion : {estacion}</p>):
        estacion == "Otoño" ? ( <p className='otonio'>Estacion : {estacion}</p>):
        ( <p className='invierno'>Estacion : {estacion}</p>)
      }
      
       
       
       

    </div>
  )
}

export default Cards