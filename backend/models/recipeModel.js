import mongoose from 'mongoose'

const ingredientSchema = mongoose.Schema({
  quantity: String,
  name: String,
  type: String,
})

const recipeSchema = mongoose.Schema({
  name: String,
  type: String,
  servings: Number,
  difficulty: String,
  ingredients: [ingredientSchema],
  steps: [{ type: String }],
  timers: [{ type: Number }],
  imageURL: String,
  originalURL: String,
})

const Recipe = mongoose.model('Recipe', recipeSchema)

export default Recipe
