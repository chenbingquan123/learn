// 开启定时器，3秒后创建1-10，10个目录；创建成功后开启一次性定时器，将创建的10个目录10秒后删除


const  fs=require('fs');
//开启一次性定时器
setTimeout(()=>{
     // 创建目录
   for(let  i=1;i<=10;i++){
      fs.mkdirSync('./'+i);
    }
  //目录创建成功后，开启一次性定时器删除目录
  setTimeout(()=>{
      //删除目录
      for (let  i=1;i<=10;i++){
          fs.rmdirSync('./'+1);
      }
  },10000);


},3000)


