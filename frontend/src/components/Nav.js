import React from 'react'

const Nav = ({ recipes, selectRecipe }) => {
  return (
    <nav>
      <h1>MyRecipes</h1>
      {recipes.map((recipe, index) => (
        <p key={index} onClick={selectRecipe.bind(this, index)}>
          {recipe.name}
        </p>
      ))}
    </nav>
  )
}

export default Nav
