import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecipeStates } from '../Context/Context'

const Navbar = () => {
  
  const {setAuth} = useRecipeStates()
  
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    setAuth(false)
  }

  return (
    <div className='navbar'>
        <button onClick={() => navigate(-1)}>↩</button>
        <Link to='/'><h3>Inicio</h3></Link>
        <Link to='/menu'><h3>Menu</h3></Link>
        <Link to='/contacto'><h3>Contacto</h3></Link>
        <Link to='/acerca'><h3>Acerca de</h3></Link>
        <Link to='/vegetariano'><h3>Vegetarianos</h3></Link>
        <Link to='/postres'><h3>Postres</h3></Link>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar