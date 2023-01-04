const fs = require('fs');
const path = require("path");
const tools = require('./tools')

module.exports = function(route, prefix = '') {
    let files = fs.readdirSync(path.resolve(__dirname, route));
    let list=[];
    for (let i in files) {
        let filename = files[i].split('.').slice(0, -1).join('.');
        let link = route.slice(2) + '/' + filename;
        if (filename.toLowerCase() !=="readme" && filename.toLowerCase() !=="index"){
            list.push(link);
        }
    }
    return list;
}
