exports.sayHelloInEnglish = () => {
    return 'Hello'
}

exports.sayHelloInSwedish = function () {
    return 'Hej'
}

exports.sayHelloInTatar = function () {
    return 'Isänme'
}
exports.country1='Vietname'
exports.country2='United Kingdom'
exports.student={
    name:"DHT",
    age:'18'
}
exports.person=function (firstName,lastName){
    this.firstName=firstName
    this.lastName=lastName
    this.getFullName=() =>{
        return this.firstName+' '+this.lastName;
    }
}