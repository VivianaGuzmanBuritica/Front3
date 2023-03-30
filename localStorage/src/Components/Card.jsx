import React from 'react'

const Card = ({recipe}) => {
  return (
    <div >
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt="" />
    </div>
  )
}

export default Card