const fs = require('fs');
const path = require("path");
const tools = require('./tools')

export default function(route, prefix = '', numbered = false) {
    let files = fs.readdirSync(path.resolve(__dirname, route));
    let list=[];
    for (let i in files) {
        let filename = files[i].split('.').slice(0, -1).join('.');
        let link = route.slice(2) + filename;
        if (filename.toLowerCase() !=="readme" && filename.toLowerCase() !=="index"){
            if (numbered) filename = filename.slice(3)
            list.push({
                text: (prefix ? prefix + ' ' : '') + tools.capitalizeWords(filename.replaceAll('-', ' ')), //filename[0].toUpperCase() + filename.slice(1).replaceAll('-', ' ')
                link: link
            });
        }
    }
    return list;
}
