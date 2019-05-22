'use strict';

console.log("In client/app.js");

(function(){

const dataButton = document.getElementById('getData');
dataButton.addEventListener('click', getData);


function getXHR(url, cb2){

}


function getData(event){
    event.preventDefault();

    let url = document.defaultView.location + 'data';


    getXHR(url, function(err, res){
        if (err){console.log(err);
        return;}
    })

}



})();