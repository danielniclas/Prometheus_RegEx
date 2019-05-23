'use strict';

const fs = require('fs');
const githubContent = require('github-content');
const data = require('../regex_list_production.json');

let repoItem = data.prometheus;

console.log('DATA:');
console.log(repoItem);

let parsedContents;
let fileContents;
let stringContents;

let regexType;

let PATH;
let DIR = `/Volumes/USB 128GB/MAPLELABS/RegEx_REPO_Project/`;
let GIT_OWNER = "danielniclas";
let REPO_NAME = "Prometheus_RegEx";
let REPO_BRANCH = "master";


// let repoItem = ['linux-regex.json','redis-regex.json','postgres-regex.json','ssss.json'];


repoItem.forEach((element, index, array) => {

    regexType = element.split('-').shift();
    console.log(`regexType: ${regexType}`);
    gcFunc(regexType);

});


function writeFile(content, PATH, regexType){

    fs.writeFile(PATH, content, function(err){
        if(err){
            return console.log(err);
        }
        console.log(`The file: ${regexType}-regex.json was saved`);
        console.log(`At the following location: ${PATH}`);
    })
}


function gcFunc(regexType){

    let options = {
        owner: GIT_OWNER,
        repo: REPO_NAME,
        branch: REPO_BRANCH
    };

    let gc = new githubContent(options);

    gc.file(`${regexType}-regex.json`, function(err, file) {
        if (err) return console.log(err);

        // PATH = `/Volumes/USB 128GB/MAPLELABS/RegEx_REPO_Project/${regexType}-regex-WRITE.json`;  //  << write to this file
        PATH = DIR + `${regexType}-regex-WRITE.json`;  //  << write to this file
        // console.log(PATH);

        try{
            fileContents = file.contents;
            parsedContents = JSON.parse(fileContents);
            stringContents = JSON.stringify(parsedContents);
            writeFile(stringContents, PATH, regexType);

        } catch(err) {

            console.log(`>>>> Invalid Repo Item Requested: ${regexType}-regex.json Not Present in Repo <<<<<`);
            console.log('>>>> File not created <<<<<');
            // console.log(err);

        }

    });
}