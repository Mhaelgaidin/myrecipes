import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    async function getRecipes() {
      let { data } = await axios.get(`/api`)
      setRecipes(data)
    }
    getRecipes()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>MyRecipes</h1>
        {recipes.map((recipe, index) => (
          <p key={index}>{recipe.name}</p>
        ))}
      </header>
    </div>
  )
}

export default App
