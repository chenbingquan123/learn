// const { LOADIPHLPAPI } = require('dns');
const fs=require('fs');
// const { domainToUnicode } = require('url')

// //1.查看文件的状态


// let s=fs.statSync('../day02');
// console.log(s);
// //查看是否为文件
// console.log(s.isFile());
// //查看是否为目录
// console.log(s.isDirectory());



//异步：放入到一个单独的线程来执行，把结果以回调函数形式交给主程序
//通过回调函数获取结果
// fs.stat('./01_homeword.js',(err,s)=>{
//     //err，可能产生的错误
//     if(err)    throw err;
    
//     //s获取的文件状态
//    console.log(s);

// });

//2.读取目录
//异步
// fs.readdir('../day02',(err,arr)=>{
//     if(err){
//         throw err;
//     }
//     //读取的目录中文件
//     console.log(arr);
// });




//练习：使用同步方法读取目
// let arr=fs.readdirSync('../day02');
// console.log(arr);

// fs.mkdir('./mydir',(err)=>{
//     if(err)  throw err;
// });


//3.写入文件
// fs.writeFile('./1.txt','a=range',(err)=>{
//     if(err)  throw err;
//     console.log('写入成功');
// })

// // 练习： 使用同步方法去往2.txt中写入数据‘tedu’
// fs.writeFileSync('./2.txt',tedu);



// // 练习：使用异步方法往文件3.txt中写入数据web2009
// fs.writeFile('./03.txt','web2009',(err)=>{
// if(err)   thorw  err;

// 4.追加写入
// console.log('追加写入成功');
// });



// //练习：声明变量堡村一组学生的数据，遍历数组得到每个姓名，同步方法写入到文件stu.txt中，每个名字占1行

// let stu=['李莹男','胡飞','刘露','高洋洋','李天宝',];
// for(let i=0;i<stu.length;i++){
//     fs.appendFileSync('./stu.txt)',stu[i]+'\n');
// }




//5.读取文件
// fs.readFile('./stu.txt',(err,data)=>{
//     if(err)  throw err;
//     console.log(String (data));
// });
// //同步，读取3.txt
// let  data=fs.readFileSync('./3.txt');
// console.log(String (data));

//6.删除文件
// fs.unlink('./1.txt',(err)=>{
//     if(err)  throw err;
//     console.log('删除成功')
// });


//7.检测文件是否存在
// let s=fs.existsSync('./mydir');
// console.log(s);

// 练习：如果文件2.txt存在，则同步删除文件，如果目录mydir2不存在，则同步创建该目录

// if(fs.existsSync('./2.txt')){
//     fs.unlinkSync('./2.txt'); 
// }
// if(!fs.existsSync('./mydir2')){
//      fs.mkdirSync('./mydir2');

// };

// 8.//拷贝文件
// fs.copyFile('./3.txt','./mydir/a.txt',(err)=>{
//     if(err)  throw err;
//     console.log('拷贝成功');
// });
// //同步拷贝stu.txt到mydir2下
// fs.copyFileSync('./stu.txt','./mydir2/stu.txt');

// console.log('运行结束');