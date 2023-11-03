#! /opt/homebrew/bin/node
const http = require('http')

const hostname = '127.0.0.1'
const port = 8000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Wake up to reality! Nothing ever goes as planned in this accursed world. \n The longer you live, the more you realize that the only things that truly \n exist in this reality are merely pain. suffering and futility exist in this reality \n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
