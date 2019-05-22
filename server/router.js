'use strict';

const staticRoute = require('./staticRoute.js');
const apiRoute = require('./apiRoute.js');
// const handle404 = require('./handle404.js');
const url = require('url');

module.exports = {
    route: function(req,res){
        const urlInfo = url.parse(req.url);
        const pathName = urlInfo.pathname;
        console.log(`Request Method: ${req.method}`);

        if(req.method === 'GET'){
            if (pathName === '/'){
                staticRoute.indexHtml(req,res);
            }
            else if (pathName === '/app.js'){
                console.log('>>>>>>> JS Router/app.js');
                staticRoute.appJS(req,res);
            }
            else if (pathName === '/styles.css'){
                console.log('>>>>>>> CSS Router/styles.css');
                staticRoute.stylesCss(req,res);

            }
            else if (pathName === '/data'){
                apiRoute.get(req,res);
            }
            else {
                // handle404.get(req,res)
                console.log("handle-404");
            }
        }
    }
};