var dir = require('node-dir');
var path = require('path');
var fs = require('fs');

var rootdir = __dirname;
dir.files(__dirname,function(err,content){
  if(err) throw err;
  moveFiles(content);
});



function moveFiles(filepaths){
  for(var i = 0;i < filepaths.length;i++){
    filedir = path.dirname(filepaths[i]);
    if(filedir != rootdir){
    console.log(filepaths[i]);
    var filename = path.basename(filepaths[i]);
    var source = fs.createReadStream(filepaths[i]);
    var dest = fs.createWriteStream(rootdir + "\\" + filename);

    source.pipe(dest);
    source.on('end', function() {});
    source.on('error', function(err) { console.log(filepaths[i] + ' failed to copy.') });
    }
  }
}
