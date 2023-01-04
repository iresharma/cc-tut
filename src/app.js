const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const path = require("path")

require("dotenv").config()

const middlewares = require("./middlewares")

const app = express()

app.use(morgan("dev"))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.use(express.static(`${__dirname}/assets`))

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/index.html"))
})


app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

module.exports = app
