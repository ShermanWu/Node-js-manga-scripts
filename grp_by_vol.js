var dir = require('node-dir');
var path = require('path');
var fs = require('fs');
var mv = require('mv');

var rootdir = __dirname;
dir.subdirs(__dirname,function(err,subdirs){
  if(err) throw err;

  moveFilesByVol(subdirs);
});



function moveFilesByVol(filepaths){
  for(var i = 0;i < filepaths.length;i++){
    var subdir = filepaths[i];
    var arr = subdir.split("_");
    var subdirname = subdir.split("\\");
    var manganame = subdirname[subdirname.length-2];
    subdirname = subdirname[subdirname.length-1];

    var vol = arr[arr.length-2].substr(1,arr[arr.length-2].length-1);


    mv(subdir, rootdir + '\\'+ manganame + ' Vol ' + vol + '\\' + subdirname, {mkdirp: true}, function(err) {
    // done. it first created all the necessary directories, and then
    // tried fs.rename, then falls back to using ncp to copy the dir
    // to dest and then rimraf to remove the source dir
  });
  }
}
