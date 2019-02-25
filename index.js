let express = require('express')
let bp = require('body-parser')
let port = 3000

let server = express()

//Middlewear
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))

//Routes
let catRoutes = require('./server-assets/routes/cat-routes.js')
let dogRoutes = require('./server-assets/routes/dog-routes.js')
server.use('/api/cats', catRoutes)
server.use('/api/dogs', dogRoutes)

//Catchall
server.use('*', (req, res, next) => {
  res.status(400).send('no matching routes')
})

//StartServer
server.listen(port, () => {
  console.log('server is runnning on port:' + port)
})