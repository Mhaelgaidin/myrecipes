import React from 'react'

const Recipe = ({ recipe }) => {
  return (
    <article className='recipe'>
      {!recipe.ingredients ? (
        <></>
      ) : (
        <>
          <section className='details'>
            <img src={recipe.imageURL} alt='Meal' />
            <div>
              <h2>{recipe.name}</h2>
              <p>{recipe.servings}</p>
              <p>
                Type: <span>{recipe.type}</span>
              </p>
              <p>
                Difficulty: <span>{recipe.difficulty}</span>
              </p>
            </div>
          </section>
          <section className='lists'>
            <section className='ingredients'>
              <h3>Ingredients</h3>
              <ul>
                {recipe.ingredients.map((i, index) => (
                  <li key={index}>
                    {i.quantity} <span>{i.name}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className='steps'>
              <h3>Steps</h3>
              <ol>
                {recipe.steps.map((s, index) => (
                  <li key={index}>{s}</li>
                ))}
              </ol>
            </section>
          </section>
        </>
      )}
    </article>
  )
}

export default Recipe
