import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
    const[user, setUser]=useState({
        nombre:"",
        medico:""

    })
  const [show, setShow]=useState(false)
    const[err, setErr]=useState(false)

    const handleSubmit=(event)=>{
        event.preventDefault()
        if( user.medico !== ''){
            setShow(true)
            setErr(false)
        } else {
            setShow(false)
            setErr(true)
        }
    }

  

  return (
    
  <>
    <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=> setUser({...user, nombre: e.target.value})}></input>

            <select onChange={(e)=> setUser({...user, medico: e.target.value})}>
                <option value="Dermatologo">Dermatologo</option>
                <option value="Cardiologo">Cardiologo</option>
                <option value="Odontologo">Odontologo</option>
                
            </select>

        <button>Enviar</button>
            
    </form>
    {err && "error"}
    {show && <Card nombre={user.nombre} medico={user.medico}/>}
   
   </>
  )
}

export default Form