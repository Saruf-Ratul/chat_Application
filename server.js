var express = require("express")

var app = express()
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var messages = [
    { name: "Ratul", messsage: "Hi !" },
    { name: "Mili", messsage: "Hi !" },
]

app.get('/messages', (req, res) => {

    res.send(messages)
})

var server = app.listen(3010, () => {
    console.log("Server is listening on port ", server.address())
})