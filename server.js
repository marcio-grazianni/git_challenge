const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  switch(req.url) {
    case "/": 
      return respondHello(req, res)
    case "/user-agent": 
      return respondHello(req, res)
  }
  // if (req.url === '/') return respondHello(req, res)

  res.end()
})

function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server
