'use strict';

// let data = require('/data.json');
const fs = require('fs');
const curl = require('curlrequest');
const githubContent = require('github-content');

module.exports = {

    get:function(){

        console.log('>>> apiRoute.js > GET Function');

        let gitUrl = 'https://github.com/pramurthy/cloudprovision-templates/blob/master/templates_list_production.json'
        let options = { url: gitUrl, include: true};

        console.log("apiRoute.js GET");

        curl.request(options, function(err,parts){
            parts = parts.split('\r\n');
            let data = parts.pop()
            , head = parts.pop();

            console.log(data);
            console.log(head);

        });
    }
};


function curlFunc() {

    console.log('>>> apiRoute.js > GET Function');

    let gitUrl = 'https://github.com/pramurthy/cloudprovision-templates/blob/master/templates_list_production.json';
    let options = {url: gitUrl, include: true};

    console.log("apiRoute.js GET");

    curl.request(options, function (err, parts) {
        parts = parts.split('\r\n');
        let data = parts.pop()
            , head = parts.pop();

        // console.log(head);
        console.log(data);

    });
}

function gcFunc(){

    console.log('>>> apiRoute.js > gcFunc');

    let options = {
        owner: 'doowb',
        repo: 'github-content',
        branch: 'master'
    };

    let gc = new githubContent(options);

    gc.file('package.json', function(err, file) {
        if (err) return console.log(err);

        console.log('gc.file() >>>');
        console.log(file.path);
        console.log(file.contents);

        let fileContents = file.contents;
        let parsedContents = JSON.parse(fileContents);

        console.log(parsedContents);
    });
}

// curlFunc();
gcFunc();