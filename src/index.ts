import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/ping', (c) => {

  return c.json({pong:"Hello World!"})
  })

app.get('/platform', (c) => {
  return c.json({platform:process.platform})
  
})

app.get('/college', (c) => {
  return c.json({college:"SIT"})

})

serve(app)
  console.log(`Server is running on http://localhost:${3000}`)

