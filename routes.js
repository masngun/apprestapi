'use strict';

const { route } = require('express/lib/application');
const { json } = require('express/lib/response');

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuamahasiswa);
    
    app.route('/tampil/:id')
       .get(jsonku.tampilberdasarid);

    app.route('/tambah')
        .get(jsonku.tambahMahasiswa);
     
       
}