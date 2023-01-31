const {response} = require('express')

const tickets = [
    { id: 1,
    selectType: "OneWay",
    depart: "SaltLake",
    destination: "LosAngeles",
    class: "Basic",
    price: "100"
    }, 
    { id: 2,
    selectType: "OneWay",
    depart: "SaltLake",
    destination: "LosAngeles",
    class: "Economy",
    price: "350"
    },
    { id: 3,
    selectType: "OneWay",
    depart: "SaltLake",
    destination: "LosAngeles",
    class: "Premium Economy",
    },
    { id: 4, 
    selectType: "OneWay",
    depart: "SaltLake",
    destination: "LosAngeles",
    class: "Bussiness",
    },
    { id: 5,
    selectType: "OneWay",
    depart: "SaltLake",
    destination: "LosAngeles",
    class: "First Class"
    },
    { id: 6,
    selectType: "OneWay",
    depart: "LosAngeles",
    destination: "SaltLake",
    class: "Basic"
    },
    { id: 7,
    selectType: "OneWay",
    depart: "LosAngeles",
    destination: "SaltLake",
    class: "Economy"
    },
    { id: 8,
    selectType: "OneWay",
    depart: "LosAngeles",
    destination: "SaltLake",
    class: "Premium Economy"
    },
    { id: 9,
    selectType: "OneWay",
    depart: "LosAngeles",
    destination: "SaltLake",
    class: "Bussiness"
    },
    { id: 10,
    selectType: "OneWay",
    depart: "LosAngeles",
    destination: "SaltLake",
    class: "First Class"
    },
    { id: 11,
    selectType: "roundTrip",
    depart: "SaltLake",
    destination: "LosAngeles",
    class: "Basic",
    }, 
    { id: 12,
    selectType: "roundTrip",
    depart: "SaltLake",
    destination: "LosAngeles",
    class: "Economy",
    },
    { id: 13,
    selectType: "roundTrip",
    depart: "SaltLake",
    destination: "LosAngeles",
    class: "Premium Economy",
    },
    { id: 14,
    selectType: "roundTrip",
    depart: "SaltLake",
    destination: "LosAngeles",
    class: "Bussiness",
    },
    { id: 15,
    selectType: "roundTrip",
    depart: "SaltLake",
    destination: "LosAngeles",
    class: "First Class"
    },
    { id: 16,
    selectType: "roundTrip",
    depart: "LosAngeles",
    destination: "SaltLake",
    class: "Basic",
    }, 
    { id: 17,
    selectType: "roundTrip",
    depart: "LosAngeles",
    destination: "SaltLake",
    class: "Economy",
    },
    { id: 18,
    selectType: "roundTrip",
    depart: "LosAngeles",
    destination: "SaltLake",
    class: "Premium Economy",
    },
    { id: 19,
    selectType: "roundTrip",
    depart: "LosAngeles",
    destination: "SaltLake",
    class: "Bussiness",
    },
    { id: 20,
    selectType: "roundTrip",
    depart: "LosAngeles",
    destination: "SaltLake",
    class: "First Class"
    },
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