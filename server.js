#!/usr/bin/env node

'use strict';

// set up ======================================================================
var express = require('express');
var app = express(); // create our app w/ express
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "localhost";
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

// configuration ===============================================================
app.use('/', express.static(__dirname + '/public'));

// routes ======================================================================

// listen (start app with node server.js) ======================================
app.listen(port, ipaddress, function() {
    console.info('%s: Node server started on %s:%d ...', Date(Date.now()), ipaddress, port);
});
