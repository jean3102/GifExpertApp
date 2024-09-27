import { render } from "@testing-library/react"
import App from "../App"

describe("test in <App/>",() => {
  test("check if the <App/> is rendered",() => {
    render(<App/>)
  })
})