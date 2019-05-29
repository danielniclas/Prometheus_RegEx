'use strict';

const fileWrite = require('./writeFile.js');

module.exports = {

    get:function(req,res){

        fileWrite.getWriteFile();

    }
};



