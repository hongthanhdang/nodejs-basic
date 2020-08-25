var greetings = require('./greetings.js')

console.log('Swedish ' +
    greetings.sayHelloInSwedish() +
    ' & English ' +
    greetings.sayHelloInEnglish() +
    ' & Tatar ' +
    greetings.sayHelloInTatar())
console.log(greetings.country1)
console.log(greetings.country2)
console.log(greetings.student.name)
var person1=new greetings.person('Ha','Dang');
console.log(person1.getFullName())