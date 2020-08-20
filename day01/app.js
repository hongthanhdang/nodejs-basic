console.log("Hello World!");
carName = "Volvo";
console.log(carName);
var carName;

const x=(x,y) => x*y;
hello =(val) => 'Hello '+val;
console.log(x(3,4))
console.log(hello('Thanh'))
"use strict";
class Car{
    constructor(brand){
        this.brand=brand;
    }
    get cnam(){
        return this.brand;
    }
    // set cnam(x){
    //     this.brand=x;
    // }
    present(){
        return "I have a "+this.brand;
    }
    present(x){
        console.log(x+" I have a "+this.brand);
    }
}
class Model extends Car{
    constructor(brand,mod){
        super(brand);
        this.model=mod;
    }
    show(){
        return this.present()+', it is a model '+this.model;
    }
}
// myCar= new Car("BMW");
// // console.log(myCar.brand);
// myCar.present();
// myCar.present("ANH ");
// myCar.brand="Mercedes";
// console.log(myCar);
// myCar1=new Model("BMW","X5")
// console.log(myCar1.show());

// Array.find()
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);