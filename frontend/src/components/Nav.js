import React, { useState, useEffect } from 'react'

const Nav = ({ recipes, selectRecipe, activeRecipe }) => {
  const [showNav, setShowNav] = useState(true)

  const checkActive = (recipe) => {
    if (activeRecipe.name === recipe.name) {
      return 'active'
    } else {
      return ''
    }
  }

  const handleClick = (index) => {
    selectRecipe(index)
    toggleMenu()
  }

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setShowNav(false)
    } else {
      setShowNav(true)
    }
  }

  const toggleMenu = () => {
    if (window.innerWidth < 600) {
      setShowNav(showNav ? false : true)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <nav>
      <h1 onClick={toggleMenu}>
        MyRecipes
        {showNav ? (
          <i class='fas fa-folder-open'></i>
        ) : (
          <i class='fas fa-folder'></i>
        )}
      </h1>
      {showNav && (
        <div>
          {recipes.map((recipe, index) => (
            <p
              key={index}
              onClick={handleClick.bind(this, index)}
              className={checkActive(recipe)}
            >
              {recipe.name}
            </p>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Nav
