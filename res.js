'use strict';

const { response } = require("express");
const { end } = require("./koneksi");

exports.ok = function(values, res) {
    var data = {
        'status' : 200,
        'values' : values
    };

     res.json(data);
     res.end();
} 