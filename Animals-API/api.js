const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Animal = require('./animal.controller')
const port = 3000
const { Auth, isAuthenticated } = require('./auth.controller')


mongoose.connect('mongodb+srv://root:my0wnT1M3@cluster0.tzytc1a.mongodb.net/miapp?retryWrites=true&w=majority')

app.use(express.json())

app.get('/animals', isAuthenticated, Animal.list)
app.post('/animals', isAuthenticated, Animal.create)
app.put('/animals/:id', isAuthenticated, Animal.update)
app.patch('/animals/:id', isAuthenticated, Animal.update)
app.delete('/animals/:id',isAuthenticated, Animal.destroy)
app.post('/login', isAuthenticated,Auth.login)
app.post('/register',isAuthenticated, Auth.register)


app.use(express.static('app'))

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`)
})
app.get('*', (req, res) => {
	res.status(404).send('Esta página no existe :(')
})

app.listen(port, () => {
	console.log('Arrancando la aplicación!')
})
