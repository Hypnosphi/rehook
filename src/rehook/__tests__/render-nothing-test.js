/* eslint-env jest */
import renderNothing from '../render-nothing'

test('render nothing', () => {
  let e

  try {
    renderNothing()
  } catch (thrown) {
    e = thrown
  }

  expect(e).toBe(null)
})
