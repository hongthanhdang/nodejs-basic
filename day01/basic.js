// 1. write reverse string function
var str='lairotuT SJedoN';
function reverseString(str){
    let new_string="";
    for(let i=str.length-1;i>=0;i--){
        new_string+=str[i];
    }
    return new_string;
}
console.log(reverseString(str));

// 2. 
const actors = [{ firstName: "Robert", lastName: "Downey .JR" }, { firstName: "Json", lastName: "Statham" }];
function getFullNames(actors){
    let fullNames=new Array();
    for(actor of actors){   
        fullNames.push({fullName: actor.firstName+' '+actor.lastName});
    }
    return fullNames;
}
var fullNames=getFullNames(actors);
console.log(fullNames);

// 3.

// 4. calculate all number in array
function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++) sum+=arr[i];
    return sum;
}
var array=[1,2,3,4,5,6];
var sum=sumArray(array);
console.log('Sum is: ', sum);