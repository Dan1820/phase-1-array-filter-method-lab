// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers,myDriver){
    
    return drivers.filter((elements)=>elements.toLowerCase()=== myDriver.toLowerCase())
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(function (drivers){
        return drivers.toLowerCase().startWith(letters.toLowerCase())

    })
}
function matchName(drivers, myDriver){
    return drivers.filter((elements)=>elements.name===myDriver)
}