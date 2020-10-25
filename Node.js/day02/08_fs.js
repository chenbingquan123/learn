//引入文件系统模块fs
const fs=require('fs');
//创建目录
fs.mkdirSync('./mydir');
创建mydir2
fs.mkdirSync('./mydir2');

//移除目录
fs.rmdirSync('./mydir');