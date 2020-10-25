//引入核心模块querystring
const querystring=require('querystring');
// console.log(querystring);


//查询字符串
var str='keyword=笔记本&enc=utf-8';

//将查询字符串解析为对象
// let obj=querystring.parse(str);
// console.log(obj.keyword);

// 练习：获取以下查询字符串商品的名称和价格
// pname=apple&price=5199

let str2='pname=apple&price=5199';
let obj2=querystring.parse(str2);
console.log(obj2);