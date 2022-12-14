import express from 'express'
import { randomSleep } from '../utils'
import cors from 'cors'
import JsonResponse from '../utils/randomResponse.json'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

app.get('/:id', async (req, res) => {
  const id = parseInt(req?.params?.id)
  let sleepTime
  console.time('init')
  if (id !== 100) {
    sleepTime = await randomSleep()
  }
  console.timeEnd('init')
  console.log('finishid sleep')
  // console.lo

  const jsonResponse = JSON.parse(JSON.stringify(JsonResponse))

  jsonResponse.id = id
  jsonResponse.sleepTime = sleepTime || 0

  res.send(JSON.stringify(jsonResponse))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
