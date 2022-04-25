'use strict';

var response = require ('./res');
var connection = require ('./koneksi');

exports.index = function (req,res) {
    response.ok("Applikasi REST API ku berjalan!",res)
};

// menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function(req,res) {
    connection.query('SELECT * FROM mahasiswa', function(error, rows, field){
        if(error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

// menampilkan data mahasiswa by id
exports.tampilberdasarid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function(error, rows, fields) {
            if(error){
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
}

