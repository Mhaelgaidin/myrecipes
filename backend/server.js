import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import Recipe from './models/recipeModel.js'

dotenv.config()
connectDB()

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000

app.get('/api', async (req, res) => {
  Recipe.find()
    .then((recipes) => res.json(recipes))
    .catch((err) => {
      res.send('Unable to Find Recipes')
    })
})

app.post('/api', async (req, res) => {
  Recipe.create(req.body)
    .then((recipes) => res.json(recipes))
    .catch((err) => res.send('Error'))
})

app.listen(PORT, console.log(`Server running on PORT ${PORT}`))
