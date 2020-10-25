//创建Buller,储存数据
let  buf=Buffer.alloc(5,'abcde');
console.log(buf);
//将boffer 数据转为字符串
console.log( String(buf));
console.log(buf.toString());