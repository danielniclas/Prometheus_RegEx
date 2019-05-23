'use strict';

// let data = require('/data.json');
const fs = require('fs');
const curl = require('curlrequest');
const githubContent = require('github-content');

const indexHtml = fs.readFileSync('./client/index.html', {encoding:'utf8'});

let parsedContents;
let fileContents;



function gcFunc(){

    console.log('>>> apiRoute.js > gcFunc');

    let options = {
        owner: 'danielniclas',
        repo: 'Prometheus_RegEx',
        branch: 'master'
    };

    let gc = new githubContent(options);

    gc.file('regex.json', function(err, file) {
        if (err) return console.log(err);

        console.log('gc.file() >>>');
        console.log(file.path);
        console.log(file.contents);

        fileContents = file.contents;
        parsedContents = JSON.parse(fileContents);

        console.log(parsedContents);
    });
}

gcFunc();

module.exports = {

    get:function(req,res){

        // console.log('>>> apiRoute.js > GET > gcFunc');

        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(fileContents);
        console.log("File Contents: ");
        console.log(fileContents);
        res.end();

        //
        // let options = {
        //     owner: 'danielniclas',
        //     repo: 'Prometheus_RegEx',
        //     branch: 'master'
        // };
        //
        // let gc = new githubContent(options);
        //
        // gc.file('regex.json', function(err, file) {
        //     if (err) return console.log(err);
        //
        //     console.log('gc.file() >>>');
        //     console.log(file.path);
        //     console.log(file.contents);
        //
        //     fileContents = file.contents;
        //     parsedContents = JSON.parse(fileContents);
        //
        //     console.log(parsedContents);
        // });

        // res.write(200, {'Content-Type':'text/json'});
        // res.write(fileContents);
        // res.end();
    }

    // getREMOVE:function(){
    //
    //     console.log('>>> apiRoute.js > GET Function');
    //
    //     let gitUrl = 'https://github.com/pramurthy/cloudprovision-templates/blob/master/templates_list_production.json'
    //     let options = { url: gitUrl, include: true};
    //
    //     console.log("apiRoute.js GET");
    //
    //     curl.request(options, function(err,parts){
    //         parts = parts.split('\r\n');
    //         let data = parts.pop()
    //         , head = parts.pop();
    //
    //         console.log(data);
    //         console.log(head);
    //
    //     });
    // }
};


// function curlFunc() {
//
//     console.log('>>> apiRoute.js > GET Function');
//
//     let gitUrl = 'https://github.com/pramurthy/cloudprovision-templates/blob/master/templates_list_production.json';
//     let options = {url: gitUrl, include: true};
//
//     console.log("apiRoute.js GET");
//
//     curl.request(options, function (err, parts) {
//         parts = parts.split('\r\n');
//         let data = parts.pop()
//             , head = parts.pop();
//
//         // console.log(head);
//         console.log(data);
//
//     });
// }



// curlFunc();
// gcFunc();

