const fs = require("fs");
const path = require("path");

module.exports = function(path) {
  var files = fs.readdirSync(path);
  console.log(path)
  var list = [];
  for (var i in files) {
    var filename = files[i].split('.').slice(0, -1).join('.');  
    var link = path.slice(6) + filename;
    if (filename.toLowerCase() !=="readme" && filename.toLowerCase() !=="index"){
      var item = { 
        text: filename,
        collapsible: true, 
        children: [link]
      };
      list.push(item);
    } 
  }
  console.log(list);
  return list;
}

