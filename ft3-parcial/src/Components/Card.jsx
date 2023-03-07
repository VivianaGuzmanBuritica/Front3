import React from 'react'

const Cards = ({nombre, medico}) => {
  return (

    <div> 
        <h3>{nombre} Tenes turno con el {medico}</h3>
        <h3>Para el día / a las 16:00 hs</h3>
    </div>
  )
}

export default Cards