import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Nav from './components/Nav'
import Recipe from './components/Recipe'

function App() {
  const [recipes, setRecipes] = useState([])
  const [activeRecipe, setActiveRecipe] = useState({})

  useEffect(() => {
    async function getRecipes() {
      let { data } = await axios.get(`/api`)
      setRecipes(data)
      setActiveRecipe(data[0])
    }
    getRecipes()
  }, [])

  const selectRecipe = (index) => {
    setActiveRecipe(recipes[index])
  }
  return (
    <div className='App'>
      <Nav
        recipes={recipes}
        selectRecipe={selectRecipe}
        activeRecipe={activeRecipe}
      />
      <main>
        <Recipe recipe={activeRecipe} />
      </main>
    </div>
  )
}

export default App
