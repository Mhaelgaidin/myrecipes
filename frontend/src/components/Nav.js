import React from 'react'

const Nav = ({ recipes, selectRecipe, activeRecipe }) => {
  const checkActive = (recipe) => {
    if (activeRecipe.name === recipe.name) {
      return 'active'
    } else {
      return ''
    }
  }

  return (
    <nav>
      <h1>MyRecipes</h1>
      {recipes.map((recipe, index) => (
        <p
          key={index}
          onClick={selectRecipe.bind(this, index)}
          className={checkActive(recipe)}
        >
          {recipe.name}
        </p>
      ))}
    </nav>
  )
}

export default Nav
