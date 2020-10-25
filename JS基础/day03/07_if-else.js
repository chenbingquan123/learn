/*/是否为成年人
var eag=16;
if(eag>=18){
    console.log('成年人')
}else  {console.log('未成年人')
}*/

/*var uname='root',upwd='123456';
if(uname==='root' && upwd==='123456' ){
    console.log('登陆成功')
}else {
    console.log('登陆失败')
};*/
//练习：假设从数据库中获取到了用户的性别（1/0），打印中对应的
//男或者女，使用if-else和三目运算符两种写法
var sex=1;
if(sex===1){
    console.log('男')
} else 
 {console.log('女')
}
var s=sex===1 ? '男' : '女' 
console.log(s)