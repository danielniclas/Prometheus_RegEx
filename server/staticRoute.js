'use strict';

const fs = require('fs');
const indexHtml = fs.readFileSync('./client/index.html', {encoding:'utf8'});
const appJS = fs.readFileSync('./client/app.js', {encoding:'utf8'});
const stylesCss = fs.readFileSync('./client/styles.css', {encoding:'utf8'});

// console.log(`appJS:  ${appJS}`);

if(!indexHtml){throw new Error('Could not read index.html')}
if(!appJS){throw new Error('Could not read app.js')}
if(!stylesCss){throw new Error('Could not read style.css')}

module.exports = {
    indexHtml:function(req,res){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(indexHtml);
        res.end();
    },
    appJS:function(req,res){
        res.writeHead(200, {'Content-Type':'text/javascript'});
        res.write(appJS);
        res.end();
    },
    stylesCss:function(req,res){
        res.writeHead(200, {'Content-Type':'text/css'});
        res.write(stylesCss);
        res.end();
    }

};