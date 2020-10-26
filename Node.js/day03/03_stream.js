const fs=require('fs');
//创建可读取的流对象
let rs=fs.createReadStream('./stu.txt')


//通过事件获取流入到内存数据，一旦流入自动获取
//on 添加事件
//data 时间名称，数据流入；固定用法
//通过回调函数获取流入的数据
let count=0;//用于记录读取的段数

rs.on('data',(chunk)=>{
    //chunk(流入的数据，分段的)
    count++;
});
console.log(chunk);
                                                             
//通过事件，查看是否读取结束
//end  读取结束，一旦读取结束，自动调用回调函数
rs.on('end',()=>{
     console.log(count);
})

//通过读取流和写入流完成文件的拷贝
let rs=fs.createReadStream('./1.zip');//读取流
//创建可写入的流，文件不存在也会创建
let ws=fs.createWriteStream('./2.zip')
//把读取的流通过管道的形式添加到写入流
rs.pipe(ws);