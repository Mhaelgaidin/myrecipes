import React, { useState, useEffect } from 'react'

const Nav = ({ recipes, selectRecipe, activeRecipe, toggleModal }) => {
  const [showNav, setShowNav] = useState(true)

  const handleClick = (index) => {
    selectRecipe(index)
    if (window.innerWidth < 600) {
      toggleMenu()
    }
  }
  const handleResize = () => {
    if (window.innerWidth < 600) {
      setShowNav(false)
    } else {
      setShowNav(true)
    }
  }

  const toggleMenu = () => {
    setShowNav(showNav ? false : true)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <nav>
      <h1>MyRecipes</h1>
      <div>
        <h3 onClick={toggleModal}>
          Add Recipe <i className='fas fa-plus'></i>
        </h3>
        <h3 onClick={toggleMenu}>
          Recipes
          {showNav ? (
            <i className='fas fa-folder-open'></i>
          ) : (
            <i className='fas fa-folder'></i>
          )}
        </h3>
        {showNav && (
          <div>
            {recipes.map((recipe, index) => (
              <p
                key={index}
                onClick={handleClick.bind(this, index)}
                className={activeRecipe.name === recipe.name ? 'active' : ''}
              >
                {recipe.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav
