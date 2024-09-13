"use strict";

var express = require('express');
var app = express();
var path = require('path');
app.use(express["static"](path.resolve('frontend/public')));
app.get('*', function (req, res) {
  res.sendFile(path.resolve('frontend/public', 'index.html'));
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});