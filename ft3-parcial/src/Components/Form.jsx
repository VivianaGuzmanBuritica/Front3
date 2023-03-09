import React, { useState } from 'react'
import Card from './Card'
import './Form.css'

const Form = () => {


    const[user, setUser]=useState({
        nombre:"",
        edad:"",
        estacion:""

    })
  const [show, setShow]=useState(false)
    const[err, setErr]=useState(false)

    const handleSubmit=(event)=>{
        event.preventDefault()
        if( user.edad.length <= 3 && user.nombre.length >= 6 && user.nombre.charAt(0) !== ' '){
            setShow(true)
            setErr(false)
        }else {
            setShow(false)
            setErr(true)
        }
    }

  

  return (
    
  <>
  <h3>Parcial Viviana Guzmán Buriticá</h3>
    <form onSubmit={handleSubmit} className="form">
            <h3>¿Cuál es tu estación del año favorita?</h3>
            <input placeholder="Cuál es tu edad" type="text" onChange={(e)=> setUser({...user, edad: e.target.value})}></input>
            <input placeholder="Cuál es tu nombre" type="text" onChange={(e)=> setUser({...user, nombre: e.target.value})}></input>
                      
            <select onChange={(e)=> setUser({...user, estacion: e.target.value})}>
                <option value="Elije una estación">Cual es tu estacion favorita</option>
                <option value="Primavera">Primavera</option>
                <option value="Verano">Verano</option>
                <option value="Otoño">Otoño</option>
                <option value="Invierno">Invierno</option>
                
            </select>

        <button>Enviar</button>
            
    </form>
    {err && <p className='err'>Por favor chequea que la información sea correcta</p>}
    {show && <Card nombre={user.nombre} edad={user.edad} estacion={user.estacion}/>}
   
   </>
  )
}

export default Form