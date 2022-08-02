const express = require('express')
const moongose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')
const { expressjwt: expressJwt } = require ('express-jwt')
const User = require('./user')


moongose.connect('mongodb+srv://root:my0wnT1M3@cluster0.tzytc1a.mongodb.net/auth?retryWrites=true&w=majority')

console.log(process.env.SECRET)

const validateJwt = expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] })

const signToken = _id => jwt.sign({ _id }, process.env.SECRET)


const app = express()   // this part describe own connect express and moongose
						// ability news methods such as (.use .post .listen) 
app.use(express.json()) 
app.post('/register', async (req, res) => { //first argument is a dir for the url, 
	const { body } = req  
	console.log({ body }) 
	try { 
		const isUser = await User.findOne({ email: body.email }) 
		if (isUser) {
			return res.status(403).send('Usuario ya existente.')
		}
		const salt = await bcrypt.genSalt()
		const hashed = await bcrypt.hash(body.password, salt)
		const user = await User.create({ email: body.email, password: hashed, salt })
		const signed = signToken(user._id)
		res.status(201).send(signed)
	} catch (err) {
		console.log(err)
		res.status(500).send(err.message)
	}
})

app.post('/login', async(req, res) => {
	const { body } = req
	try {
		const user = await User.findOne({email: body.email})
		if (!user) {
			res.status(403).send('Wrong Email or Password')
		} else {
			const isMatch = await bcrypt.compare(body.password, user.password)
			if (isMatch) {
				const signed = signToken(user._id)
				res.status(200).send(signed)
			} else {
				res.status(403).send('Wrong Email or Password')
			}
		}


	} catch(err) {
		res.status(500).send(err.message)

	}
})

const findAndAssignUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.auth._id)
		if (!user) {
			return res.status(401).end()
		}
		req.user = user
		next()
	} catch(e) {
		next(e)
		console.log(e);
	}
}

const isAuthenticated = express.Router().use(validateJwt,findAndAssignUser)

app.get ('/lele', isAuthenticated, (req, res) => {
	// throw new Error('New Error')
	res.send(req.user)
}) 

/*

Manejo de errores

app.use((err, req, res, next) => {
	console.error('Mi nuevo error', err.stack)
	next(err)
})


app.use((err, req, res, next) => {
	res.send('A error was found :(')
	next(err)
})

*/

app.listen(3000, () => {
	console.log('Ejecutando en puerto 3000.')
})

