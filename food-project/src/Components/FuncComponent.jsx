import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FuncComponent = ({titulo}) => {
    const[ pizza, setPizza] = useState({
      base: false,
      sabor: "Solo queso"
    })
    const[cancelOrder, setCancelOrder] =  useState(false)

    useEffect(()=>{
      console.log("tu pizza fue ordenada");
      setTimeout(()=>{
        if(!pizza.base)
        setPizza({...pizza, sabor : "peperoni"})
      }, 2000);
      return()=>{
        console.log("tu pizza fue ordenada");
      }
    }, [])

    useEffect(()=>{
     if(cancelOrder){
      alert('pedido cancelado')
      setPizza({...pizza, base: false})
      
      }}, [cancelOrder])


    return (
    <div> <h1>{titulo}</h1>
    <h3> tu pizza es: {!pizza.base ? pizza.sabor : {...pizza, sabor : "peperoni"}}</h3>
    <button onClick={() => setCancelOrder(!cancelOrder)}>
        Cancelo su orden  </button>
     
      </div>
     
  )
 
}

export default FuncComponent