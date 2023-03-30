import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Deserts from './Components/Deserts'
import LoginForm from './Components/LoginForm'
import Navbar from './Components/Navbar'
import Vegetarian from './Components/Vegetarian'
import Veggie from './Components/Veggie'
import { useRecipeStates } from './Context/Context'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import NotFound from './Pages/NotFound'
import RecipeDetail from './Pages/RecipeDetail'

function App() {

  const {token} = useRecipeStates()
  
  return (
    <div className="App">
      {token && <Navbar/>}
      
      <Routes>
        {token ? 
        <>
          <Route path='/' element={<Home/>}>
            <Route path='/vegetariano' element={<Vegetarian/>}>
              <Route path='/vegetariano/veggie' element={<Veggie/>}/>
            </Route>
            <Route path='/postres' element={<Deserts/>}/>
          </Route>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/recipe/:id' element={<RecipeDetail />}/> 
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='/acerca' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </>
        :
          <Route path='/' element={<LoginForm/>}/>
        }
      </Routes>

    </div>
  )
}

export default App
