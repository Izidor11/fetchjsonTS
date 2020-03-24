"use strict";
// not to mouch typescript syntax
exports.__esModule = true;
var axios_1 = require("axios");
var url = "http://jsonplaceholder.typicode.com/todos/1";
//async will get a promise in return
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
