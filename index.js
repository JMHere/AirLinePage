const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const ticket = require("./tick")
const app = express()

const urlencodedParser = bodyParser.urlencoded({
    extended: true
})

app.use(express.static(path.join(__dirname, '/public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res, next){
    res.render('index')
})
app.get('/home', function(req, res, next){
    res.render('home')
})
app.post('/ticketP', urlencodedParser, ticket.getData)
app.get('/purchasePage/:id', ticket.PpId)
app.listen(3000)