// 2) write file using fs-extra
const fse= require('fs-extra');
const PATH='/Users/thanhdh/Documents/souces/js/test/file3.txt';
/*
const str='Dang Hong Thanh'
fse.writeFile('/Users/thanhdh/Documents/souces/js/test/file3.txt',str,(err) =>{
    if(err) {
        console.log(err);
    }
    console.log('The file saved');
});

// 3) read file by 3 way: Callback, Promise and Async/Await
// read file by call back
fse.readFile(PATH,(err,data) =>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})
// read file by promise
const promise=new Promise((resolve,reject) =>{
    fse.readFile(PATH,(err,data) =>{
        if(err) reject(err);
        resolve(data);
    })
})
promise.then(data =>{
    console.log(data.toString());
},err => {
    console.log(err);
})
*/
// read file by async/wait
// const util=require('util');
// const readFile=util.promisify(fse.readFile);
// const promise=new Promise((resolve,reject) =>{
//     fse.readFile(PATH,(err,data) =>{
//         if(err) reject(err);
//         resolve(data);
//     })
// })
// async function read(){
//     let data=await promise;
//     console.log(data.toString());
// }
// read();

// read many file in pararel
// don't pararel
const path1='/Users/thanhdh/Documents/souces/js/test/file1.txt';
const path2='/Users/thanhdh/Documents/souces/js/test/file2.txt';
const path3='/Users/thanhdh/Documents/souces/js/test/file3.txt';
const util=require('util');
const readFile=util.promisify(fse.readFile); // return promise object
// async function read(){
//     const data1= await readFile(path1);
//     const data2= await readFile(path2);
//     const data3= await readFile(path3);
//     console.log(data1.toString());
//     console.log(data2.toString());
//     console.log(data3.toString());
// }
// read();
// pararel promise style
// async function read(){
//     Promise
//     .all([readFile(path1),readFile(path2),readFile(path3)])
//     .then(datas =>{
//         datas.forEach(value => {
//             console.log(value.toString());
//         })

//     })
// }
// read();
// pararel async/await style
async function read(){
    let datas=await Promise.all([readFile(path1),readFile(path2),readFile(path3)]);
    datas.forEach(data =>{
        console.log(data.toString());
    })
    console.log("Anh Thanh dzaiiii");
}
read();

