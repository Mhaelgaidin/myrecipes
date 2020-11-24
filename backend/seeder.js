import dotenv from 'dotenv'
import recipes from './data/recipes.js'

import Recipe from './models/recipeModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Recipe.deleteMany()
    await Recipe.insertMany(recipes)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

importData()
