"use strict";
exports.__esModule = true;
var fs = require("fs");
function total(data) {
    data.forEach(function (i) {
        console.log(i.name + ":" + i.count);
    });
}
var content = fs.readFileSync("data.json");
var data = JSON.parse(content.toString());
total(data);
