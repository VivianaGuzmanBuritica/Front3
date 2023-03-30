import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Vegetarian = () => {
  return (
    <div>
      Menues vegetarianos
      <Link to='/vegetariano/veggie'>Veggie</Link>
      <Outlet/>
    </div>
  )
}

export default Vegetarian