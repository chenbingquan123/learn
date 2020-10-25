//引入07_yan.js模块
//./同一级目录
//模块引入成功后，得到该模块导出的内容
 let obj=require('./07_yan.js');
  // console.log(obj)
  // console.log(obj.a1,obj.b1);
  //在07_yan.js中声明变量，接着在07_tou.js中访问变量
//调用所导出的函数
// console.log(obj.myfn());
//   console.log(a);
console.log( obj.myfn(5));