/*
 * @Description: Unit Testing
 * @Author: Len
 */

const server = require('../server')

test('list', async () => {
  const res = await server
    .get(`/api/book/list`)
  expect(res.body.errno).toBe(0)
})