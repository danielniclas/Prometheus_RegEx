'use strict';


module.exports = {

    getWriteFile:function() {

        const fs = require('fs');
        const githubContent = require('github-content');
        const data = require('../regex_list_production.json');

        let parsedContents;
        let fileContents;
        let stringContents;

        let regexType;
        let repoItem = data.prometheus;

        let PATH;
        let DIR = `/Users/danielniclas/MAPLELABS/REGEX_FILES/`;
        // let DIR = `/Users/danielniclas/MAPLELABS/REGEX_FILES/`;
        let GIT_OWNER = "danielniclas";
        let REPO_NAME = "Prometheus_RegEx";
        // let REPO_BRANCH = "master";
        let REPO_BRANCH = "regex_5-29-19";

        let counter = 1;


        repoItem.forEach((element, index, array) => {

            regexType = element.split('-').shift();
            console.log(`regexType: ${regexType}`);
            gcFunc(regexType);

        });


        function writeToFile(content, PATH, regexType) {

            // fs.writeFile(PATH, content, function (err) {
            //     if (err) {
            //         return console.log(err);
            //     }
            //     console.log(`The file: ${regexType}-regex.json was saved`);
            //     console.log(`At the following location: ${PATH}`);
            // })


            // console.log(`>>> COUNTER BEFORE: ${counter}`);

            if (counter === 1) {

                console.log(`>>> COUNTER BEFORE: ${counter}`);

                fs.writeFile(PATH, content, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log(`The file: ${regexType}-regex.json was saved`);
                    console.log(`At the following location: ${PATH}`);

                    // console.log(`>>> WRITE - Counter: ${counter}`);
                });

                counter++;

            } else if (counter > 1) {

                console.log(`>>> STREAM - Counter: ${counter}`);

                // let stream = fs.createWriteStream(PATH, {flags: 'a'});
                // stream.write(content);

                counter++;

                // stream.end(',');


                content = `,${content}`;

                // append data to file
                // fs.appendFile('sample.txt',data, 'utf8',
                fs.appendFile(PATH,content, 'utf8',
                    // callback function
                    function(err) {
                        if (err) throw err;
                        // if no error
                        console.log("Data is appended to file successfully.");
                        console.log(`APPEND at the following location: ${PATH}`);
                });




            }

              // counter++;
        }


        function gcFunc(regexType) {

            let options = {
                owner: GIT_OWNER,
                repo: REPO_NAME,
                branch: REPO_BRANCH
            };

            let gc = new githubContent(options);

            gc.file(`${regexType}-regex.json`, function (err, file) {
                if (err) return console.log(err);

                // PATH = DIR + `${regexType}-regex-WRITE.json`;  //  << write to this file
                PATH = DIR + `prometheus-regex-WRITE.json`;  //  << write to this file

                try {

                    fileContents = file.contents;
                    parsedContents = JSON.parse(fileContents);
                    stringContents = JSON.stringify(parsedContents);

                    // console.log(`>>> COUNTER - TRY: ${counter}`);

                    writeToFile(stringContents, PATH, regexType);   //  call write function

                } catch (err) {

                    console.log(`>>>> Invalid Repo Item Requested: ${regexType}-regex.json Not Present in Repo <<<<<`);
                    console.log('>>>> File not created <<<<<');

                }
            });
        }
    }

};