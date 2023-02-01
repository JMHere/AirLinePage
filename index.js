const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const ticket = require("./tick")
const app = express()

const urlencodedParser = bodyParser.urlencoded({
    extended: true
})

app.use(express.static(path.join(__dirname, '/public')))

app.use('/public/images/', express.static('./public/images'));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res, next){
    res.render('index') 
})
app.get('/home', function(req, res, next){
    res.render('home')
})

app.get('/log', function(req, res, next){
    res.render('sign-up')
})

app.get('/im', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/imgs/plane2.pdf'));
});

app.get('/im2', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/imgs/planeSeat.png'));
});


app.post('/ticketP', urlencodedParser, ticket.getData)
app.get('/purchasePage/:id', ticket.PpId)
app.listen(3000)


