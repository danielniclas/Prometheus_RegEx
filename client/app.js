'use strict';

const dataButton = document.getElementById('getData');
const dataSpace = document.getElementById('dataSpace');
dataButton.addEventListener('click', getData);

let returnData;

function getXHR(url){

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = handleResponse;
    xhr.onerror = handleError;

    function handleResponse(){
        if(xhr.status === 200){

            console.log('xhr.status');
            console.log(xhr.status);

            returnData = xhr.responseText;
            console.log('>>> Return Data');
            console.log(returnData);

            dataSpace.innerHTML = returnData;

            }
    }

    function handleError(error){
        console.log(`Error: ${error}`);
        console.log(error);
    }

    xhr.send();
}


function getData(event){
    console.log("getData(event)");
    event.preventDefault();
    let url = document.defaultView.location + 'data';

    console.log(`URL: ${url}`);

    getXHR(url);

}

