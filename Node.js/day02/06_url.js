//引入URL模块
// const url=require('url')
// var str='http://www.codeboy.com:9999/products.html?kw=dell';
// //将URL解析为对象，为了得到各个部分
// let obj=url.parse(str);
// console.log(obj);
// console.log(obj.query);



// 练习：获取以下URL中查询字符串传递的数据。
// https://www.tmooc.cn:443/web/2009.html?cid=3&course=nodejs
const url=require('url');

const querystring=require('querystring') ;
var str2='https://www.tmooc.cn:443/web/2009.html?cid=3&course=nodejs';
//将URL解析为对象，从中找到查询字符串部分


let obj2=url.parse(str2);
console.log(obj2);
console.log(obj2.query);
//将查询字符串解析为对象，从中得到
let obj3=querystring.parse(obj2.query);
console.log(obj3);
