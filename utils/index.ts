const BASE_TIME = 8000

export const randomSleep = () => new Promise((resolve, _) => {
  const random = Math.random() * 15 * 1000
  console.log('random', random)
  setTimeout(() => resolve(random + BASE_TIME), BASE_TIME + random)
})
