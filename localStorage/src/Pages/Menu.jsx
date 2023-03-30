import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import { useRecipeStates } from '../Context/Context'

const Menu = () => {
  const {recipes} = useRecipeStates()
  return (
    <div>
       {recipes.map((recipe) => <Link key={recipe.id} to={'/recipe/' + recipe.id}> <Card  recipe={recipe}/></Link>)}
    </div>
  )
}

export default Menu