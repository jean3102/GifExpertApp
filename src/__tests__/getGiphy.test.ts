import { getGiphy } from "../services/getGiphy"

describe("test in getGiphy",() => {
  test("should  return array of gifs",async () => {
    const giphy = await getGiphy('goku')
    expect(giphy.length).toBeGreaterThan(0)
  })
  test("should return 0 if no pass category as prop",async () => {
    const giphy = await getGiphy('')
    expect(giphy.length).toBe(0)
  })


})