import express from 'express'
import fs from 'fs'
const app = express()

const PORT = process.env.PORT || 5000

app.get('/api', (req, res) => {
  fs.readFile('./backend/recipes.json', (err, data) => {
    if (err) {
      return res.send('Cannot find Recipes')
    }
    res.send(JSON.parse(data))
  })
})

app.listen(PORT, console.log(`Server running on PORT ${PORT}`))
