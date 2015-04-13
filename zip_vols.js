var dir = require('node-dir');
var path = require('path');
var fs = require('fs');
var zipfolder = require('zip-folder');


var rootdir = __dirname;
var rootdirdepth = rootdir.split('\\').length;

dir.subdirs(__dirname,function(err,subdirs){
  if(err) throw err;

  zipByFolder(subdirs);
});



function zipByFolder(folders){
  for(var i = 0;i < folders.length;i++){
    var subdir = folders[i];
    var arr = subdir.split("_");
    var subdirname = subdir.split("\\");
    var dirdepth = subdirname.length;
    subdirname = subdirname[subdirname.length-1];
    if(dirdepth == rootdirdepth + 1){ //Zip only folders in the root directory
      zipfolder(subdir, rootdir + '\\' + subdirname + '.zip', function(err) {
      if(err) {
        console.log('oh no!', err);
      } else {

      }
      });
    }

  }
  console.log('Zipped Successfully.');
}
