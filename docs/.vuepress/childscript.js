var fs = require('fs');

module.exports = function(path) {
  var files = fs.readdirSync(path);
  console.log(path)
  var list = [""];
  for (var i in files) {
    var filename = files[i].split('.').slice(0, -1).join('.');  
    var link = path.slice(6) + filename;
    if (filename.toLowerCase() !=="readme" && filename.toLowerCase() !=="index"){
      list.push(link);
    } 
  }
  console.log(list);
  return list;
}