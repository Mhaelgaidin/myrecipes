import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Nav from './components/Nav'
import Recipe from './components/Recipe'
import Modal from './components/Modal'

function App() {
  const [recipes, setRecipes] = useState([])
  const [activeRecipe, setActiveRecipe] = useState({})
  const [modal, setModal] = useState(false)

  const getRecipes = async () => {
    let { data } = await axios.get(`/api`)
    setRecipes(data)
    setActiveRecipe(data[0])
  }

  useEffect(() => {
    getRecipes()
  }, [])

  const selectRecipe = (index) => {
    setActiveRecipe(recipes[index])
  }

  const toggleModal = () => {
    modal ? setModal(false) : setModal(true)
  }

  return (
    <div className='App'>
      <Nav
        recipes={recipes}
        selectRecipe={selectRecipe}
        activeRecipe={activeRecipe}
        toggleModal={toggleModal}
      />
      <main>
        <Recipe recipe={activeRecipe} />
      </main>
      {modal && <Modal toggleModal={toggleModal} getRecipes={getRecipes} />}
    </div>
  )
}

export default App
