'use strict';

// const fs = require('fs');
// const githubContent = require('github-content');

// let parsedContents;
// let fileContents;
// let stringContents;
//
// let regexType = "";
// let PATH = `/Volumes/USB 128GB/MAPLELABS/RegEx_REPO_Project/${regexType}-regex-WRITE.json`;
// let GIT_OWNER = "danielniclas";
// let REPO_NAME = "Prometheus_RegEx";
// let REPO_BRANCH = "master";
//
// let repoItem = ['linux-regex.json','redis-regex.json'];
//
//
// repoItem.forEach((element, index, array) => {
//
//     regexType = element.split('-').shift();
//     console.log(`regexType: ${regexType}`);
//     gcFunc(regexType);
//
// });
//
//
// function writeFile(content, PATH){
//
//     fs.writeFile(PATH, content, function(err){
//         if(err){
//             return console.log(err);
//         }
//         console.log("The file was saved");
//     })
// }
//
//
//
// function gcFunc(regexType){
//
//     let options = {
//         owner: GIT_OWNER,
//         repo: REPO_NAME,
//         branch: REPO_BRANCH
//     };
//
//     let gc = new githubContent(options);
//
//     gc.file(`${regexType}-regex.json`, function(err, file) {
//         if (err) return console.log(err);
//
//         let PATH = `/Volumes/USB 128GB/MAPLELABS/RegEx_REPO_Project/${regexType}-regex-WRITE.json`;  //  << write to this file
//         console.log(PATH);
//
//         fileContents = file.contents;
//         parsedContents = JSON.parse(fileContents);
//         stringContents = JSON.stringify(parsedContents);
//
//         writeFile(stringContents, PATH);
//
//     });
// }

// gcFunc(regexType);



module.exports = {

    get:function(req,res){

        // console.log('>>> apiRoute.js > GET > gcFunc');

        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(fileContents);
        console.log("File Contents: ");
        console.log(fileContents);
        res.end();
    }
};



