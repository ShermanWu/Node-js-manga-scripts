var dir = require('node-dir');
var path = require('path');
var fs = require('fs');
var mv = require('mv');
var prompt = require('prompt');

var rootdir = __dirname;

prompt.start();
prompt.get(['Prefix','Suffix'],function(err,result){
  console.log('CLI received:');
  console.log(' Prefix: ' + result.Prefix);
  console.log(' Suffix: ' + result.Suffix);

  dir.subdirs(__dirname,function(err,subdirs){
    if(err) throw err;
    renameFolders(subdirs,result.Prefix,result.Suffix);
  });

});





function renameFolders(folders,prefix,suffix){
  for(var i = 0;i < folders.length;i++){
    var subdir = folders[i];
    var subdirname = subdir.split("\\");
    subdirname = subdirname[subdirname.length-1];

    mv(subdir,rootdir + '\\' + prefix + subdirname + suffix, {mkdirp: true}, function(err) {
    // done. it first created all the necessary directories, and then
    // tried fs.rename, then falls back to using ncp to copy the dir
    // to dest and then rimraf to remove the source dir
    });
  }
}
