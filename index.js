const returnFirstTwoDrivers = names => names.slice(0,2)
const returnLastTwoDrivers = names => names.slice(-2)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num, multiplier){
    return function multiplier() {
        return num * 5
    }
}

function fareDoubler(num){
   return num * 2
}
function fareTripler(num){
    return num * 3
 }

 function selectDifferentDrivers(names, cb){
    return cb(names)
 }