import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello 343!')
})

export default app



//app.get('/watch/:id', (c) => {
  //const page = c.req.query('page')
  //const id = c.req.param('id')
  //c.header('X-Message', 'Hi!')
  //return c.text(`You want to see ${page} of ${id}`)
//})


