const {response} = require('express')

const tickets = [
    { id: 1,
    selectType: "OneWay",
    depart: "SaltLake",
    destination: "LosAngeles",
    class: "Basic",
    }, 
    { id: 2,
    selectType: "OneWay",
    depart: "SaltLake",
    destination: "LosAngeles",
    class: "First Class"}
]


exports.getData = (req, res, next) => {

    let info2 =[]
    var i = 0
    let info = {}
    tickets.forEach(function(ticket)  {
        if (req.body.selectType == ticket.selectType && req.body.depart == ticket.depart && req.body.destination == ticket.destination) {
            info2[i] = ticket
            i++
        }
    });

        res.render('ticketP', {
            ticketsOut : info2,
        })
    }

    let bTicket;

exports.PpId = (req, res ,next) => {

    tickets.forEach(function(ticket) {
        if (ticket.id == req.params.id) {
            bTicket = ticket
        }
    })

    res.render('purchasePage', {
        "ticket": bTicket
    }) 
}