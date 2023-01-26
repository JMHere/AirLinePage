
const tripT = document.getElementById("selectType")
const depart = document.getElementById("depart")
const destination = document.getElementById("destination")
const aPassangers = document.getElementById("aPassanger")
const cClass = document.getElementById("class")
const ticket1 = document.getElementById("ticket1")

function finalForm() {
    console.log(tripT.value, depart.value, destination.value, aPassangers.value, cClass.value)
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

