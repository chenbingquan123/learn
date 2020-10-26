//引入http模块
const http=require('http');
//创建web服务器
const app=http.createServer();
//设置端口，用于访问web服务器
app.listen(1109);

//访问服务器
//域名，IP地址1109
//http://127.0.0.1:1109

//添加事件，获取请求并作出响应
//request  事件名称，一旦浏览器请求，就自动触发这个事件
app.on('request',(req,res)=>{

   //req 请求的对象
   //获取请求的URL和请求的方法
   console.log((req.url,req.method));


   //res 响应的对象
   //设置响应的内容
  
  
//    res.write('这是你的jianbing1');
//    //结束并发送响应
//    res.end();


//设置响应的重定向
// res.writeHead(302,{

//     location:'http://www.tmooc.cn'   //跳转的URL
// })
//   //结束并发送响应
//   res.end();

res.writeHead(404);
res.write('not found');
res.end();

});

