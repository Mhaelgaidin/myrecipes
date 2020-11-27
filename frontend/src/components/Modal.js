import React, { useState } from 'react'
import { generate } from 'shortid'
import axios from 'axios'

const Modal = ({ toggleModal, getRecipes }) => {
  const [name, setName] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [servings, setServings] = useState('')
  const [type, setType] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [steps, setSteps] = useState([])
  const [image, setImage] = useState('')

  const updateIngredients = (e, i, key) => {
    const value = e.target.value
    setIngredients((currentIngredients) =>
      currentIngredients.map((x) =>
        x.id === i.id
          ? {
              ...x,
              [key]: value,
            }
          : x
      )
    )
  }

  const updateSteps = (e, s) => {
    const value = e.target.value
    setSteps((currentSteps) =>
      currentSteps.map((x) =>
        x.id === s.id
          ? {
              ...x,
              step: value,
            }
          : x
      )
    )
  }

  const newRecipe = async (recipe) => {
    try {
      await axios.post(`/api`, recipe)
      getRecipes()
      toggleModal()
    } catch {
      console.log('error')
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    newRecipe({
      name: name,
      difficulty: difficulty,
      servings: servings,
      ingredients: ingredients.map((i) => {
        return { quantity: i.quantity, name: i.name, type: i.type }
      }),
      type: type,
      steps: steps.map((s) => {
        return s.step
      }),
    })
  }

  return (
    <aside>
      <div>
        <h1>
          New Recipe
          <button type='button' onClick={toggleModal}>
            Cancel
          </button>
        </h1>
        <form onSubmit={submitHandler} autoComplete='off'>
          <div>
            <label htmlFor='name'>Name: </label>
            <input
              type='text'
              placeholder='Name..'
              value={name}
              id='name'
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <h4>Type</h4>
            <label htmlFor='breakfast'>Breakfast</label>
            <input
              type='radio'
              name='type'
              id='breakfast'
              value='breakfast'
              onChange={(e) => setType(e.target.value)}
              required
            />
            <label htmlFor='lunch'>Lunch</label>
            <input
              type='radio'
              name='type'
              id='lunch'
              value='lunch'
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor='supper'>Supper</label>
            <input
              type='radio'
              name='type'
              id='supper'
              value='supper'
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor='snack'>Snack</label>
            <input
              type='radio'
              name='type'
              id='snack'
              value='snack'
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='servings'>Servings: </label>
            <input
              type='number'
              placeholder='Servings..'
              value={servings}
              id='servings'
              onChange={(e) => setServings(e.target.value)}
              required
            />
          </div>
          <div>
            <h4>Difficulty</h4>
            <label htmlFor='beginner'>Beginner</label>
            <input
              type='radio'
              name='difficulty'
              id='beginner'
              value='beginner'
              onChange={(e) => setDifficulty(e.target.value)}
              required
            />
            <label htmlFor='intermediate'>Intermediate</label>
            <input
              type='radio'
              name='difficulty'
              id='intermediate'
              value='intermediate'
              onChange={(e) => setDifficulty(e.target.value)}
            />
            <label htmlFor='advanced'>Advanced</label>
            <input
              type='radio'
              name='difficulty'
              id='advanced'
              value='advanced'
              onChange={(e) => setDifficulty(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='image'>Image: </label>
            <input
              type='text'
              placeholder='image..'
              value={image}
              id='image'
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div>
            <h4>Ingredients</h4>
            {ingredients.map((i) => (
              <div key={i.id}>
                <input
                  onChange={(e) => {
                    updateIngredients(e, i, 'quantity')
                  }}
                  value={i.quantity}
                  type='text'
                  placeholder='quantity'
                  required
                />
                <input
                  onChange={(e) => {
                    updateIngredients(e, i, 'name')
                  }}
                  value={i.name}
                  type='text'
                  placeholder='name'
                  required
                />
                <input
                  onChange={(e) => {
                    updateIngredients(e, i, 'type')
                  }}
                  value={i.type}
                  type='text'
                  placeholder='type'
                  required
                />
                <button
                  type='button'
                  onClick={() => {
                    setIngredients((currentIngredients) =>
                      currentIngredients.filter((x) => x.id !== i.id)
                    )
                  }}
                >
                  x
                </button>
              </div>
            ))}
            <button
              type='button'
              onClick={() => {
                setIngredients((currentIngredients) => [
                  ...currentIngredients,
                  { id: generate(), quantity: '', name: '', type: '' },
                ])
              }}
            >
              Add New Ingredient
            </button>
          </div>
          <div>
            <h4>Steps</h4>
            {steps.map((s) => (
              <div key={s.id}>
                <input
                  onChange={(e) => {
                    updateSteps(e, s)
                  }}
                  value={s.step}
                  type='text'
                  placeholder='step'
                  required
                />
                <button
                  type='button'
                  onClick={() => {
                    setSteps((currentSteps) =>
                      currentSteps.filter((x) => x.id !== s.id)
                    )
                  }}
                >
                  x
                </button>
              </div>
            ))}
            <button
              type='button'
              onClick={() => {
                setSteps((currentSteps) => [
                  ...currentSteps,
                  { id: generate(), step: '' },
                ])
              }}
            >
              Add New Step
            </button>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </aside>
  )
}

export default Modal
