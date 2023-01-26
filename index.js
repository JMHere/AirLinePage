
const tripT = document.getElementById("selectType")
const depart = document.getElementById("depart")
const destination = document.getElementById("destination")
const aPassangers = document.getElementById("aPassanger")
const cClass = document.getElementById("class")
const times = document.getElementById("times")
const departure = document.getElementById("departure")

function finalForm() {
    console.log(tripT.value, depart.value, destination.value, aPassangers.value, cClass.value)
    ticket()
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function ticket() {
    departure.innerHTML = depart.value
}