'use strict';

        // Commit on 5-29-19

        const fs = require('fs');
        const githubContent = require('github-content');
        const data = require('../regex_list_production.json');

        let parsedContents;
        let fileContents;
        let stringContents;

        let regexType;
        let repoItem = data.prometheus;

        let FILE_PATH;
        // let DIR_PATH = `/Volumes/USB 128GB/MAPLELABS/RegEx_REPO_Project/`;
        let DIR_PATH = `/Users/danielniclas/MAPLELABS/REGEX_FILES/`;
        let GIT_OWNER = "danielniclas";
        let REPO_NAME = "Prometheus_RegEx";
        let REPO_BRANCH = "master";

        let type = '';
        // let DIR_PATH = `/Users/danielniclas/MAPLELABS/REGEX_FILES/`;

module.exports = {

    getWriteFile:function() {

        repoItem.forEach((element, index, array) => {

            regexType = element.split('-').shift();
            console.log(`regexType: ${regexType}`);
            gcFunc(regexType);

        });


        function writeToFile(content, FILE_PATH, regexType) {

            fs.writeFile(FILE_PATH, content, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log(`The file: ${regexType}-regex.json was saved`);
                console.log(`At the following location: ${FILE_PATH}`);
            })
        }


        function gcFunc(regexType) {

            let options = {
                owner: GIT_OWNER,
                repo: REPO_NAME,
                branch: REPO_BRANCH
            };

            let gc = new githubContent(options);

            // gc.file(`${regexType}-regex.json`, function (err, file) {
            gc.file(`/RegEx_Files/${regexType}/${regexType}-regex.json`, function (err, file) {
                if (err) return console.log(err);

                // FILE_PATH = DIR_PATH + `${regexType}-regex-WRITE.json`;  //  << write to this file
                FILE_PATH = DIR_PATH + `${regexType}-RegEx/` + `${regexType}-regex-WRITE.json`;  //  << write to this file

                try {

                    fileContents = file.contents;
                    parsedContents = JSON.parse(fileContents);
                    stringContents = JSON.stringify(parsedContents);
                    fs.mkdirSync(`${DIR_PATH}${regexType}-RegEx`);
                    writeToFile(stringContents, FILE_PATH, regexType);

                } catch (err) {

                    console.log(`>>>> Invalid Repo Item Requested: ${regexType}-regex.json Not Present in Repo <<<<<`);
                    console.log('>>>> File not created <<<<<');

                }
            });
        }
    }

};