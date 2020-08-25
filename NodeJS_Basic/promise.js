// Declare promise in js to call API go get a joke
var promise = new Promise(function (resolve, reject) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var request = new XMLHttpRequest();

    request.open('GET', 'http://api.idndb.com/jokes/random');
    request.onload = function () {
        if (request.status == 200) {
            resolve(request.responseText); // we got data here, so resolve the Promise
            // console.log(request.responseText)
        } else {
            reject(Error(request.statusText)); // status is not 200 OK, so reject
        }
    };
    request.onerror = function () {
        reject(Error('Error fetching data.')); // error occurred, reject the  Promise
    };
    request.send(); //send the request
});

console.log('Asynchronous request made.');

promise.then(function (data) {
    console.log('Got data! Promise fulfilled.');
    console.log(data);
}, function (error) {
    console.log('Promise rejected.');
    console.log(error.message);
});


