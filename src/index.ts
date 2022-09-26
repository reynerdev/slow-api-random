import express from 'express'
import { randomSleep } from '../utils'
import JsonResponse from '../utils/randomResponse.json'

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000

app.get('/:id', async (req, res) => {
  const id = req.params.id

  console.time('init')
  const sleepTime = await randomSleep()
  console.time('init')
  // console.lo

  const jsonResponse = JSON.parse(JSON.stringify(JsonResponse))

  jsonResponse.id = id
  jsonResponse.sleepTime = sleepTime

  res.send(JSON.stringify(jsonResponse))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
