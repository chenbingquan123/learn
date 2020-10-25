// //创建Date对象
// var d1=new Date('2020/10/22 11:30:50');
// var d2=new Date(2020,9,22,11,20,30);//月份0-11  1月-12月
// var d3=new Date();//当前操作系统的时间
// var d4=new Date(1576800000000) //距离计算机元年的毫秒数


// console.log(d4);

//获取
// var d=new Date('2020/10/22 11:47:50');
// console.log(d.getFullYear());//年
// console.log(d.getMonth()+1);//月 //下标  0-11
// console.log(d.getDate());//日
// console.log(d.getHours());//时
// console.log(d.getMinutes());//分
// console.log(d.getSeconds());//秒

// console.log(d.getDay());//星期 0-6  星期日-星期六
// console.log(d.getTime());

// 练习：创建Date对象，保存当前操作系统的时间，打印出以下格式
// ‘xxxx年xx月xx日  xx时xx分xx秒  星期四’

// var d=new Date();
// var year=d.getUTCFullYear();
// var month=d.getUTCMonth()+1;
// var date=d.getDate();
// var hour=d.getHours();
// var minute=d.getMinutes();
// var second=d.getSeconds();
// var day=d.getDay();//0-6

// var arr=['日','一','二','三','四','五','六'];
// console.log(year+'年'+month+'月'+date+'日'+hour+'时'+minute+'分'+second+'秒 星期'+arr[day]);

var d1=new Date();//当前时间
var d2=new Date('2021/1/1');//2021年元旦
//计算两者相差的毫秒数
var d=d2.getTime()-d1.getTime();
// console.log(d2-d1);//Date对象相减得到的是相差的毫秒数
//把单位由毫秒转换为秒
d=parseInt (d/1000);
//计算相差的天数=总的相差的秒数/一天的秒数
// d=parseInt (d/60/60/24);
//计算相差的小时
//去除总的相差秒中含有的天数
//总的相差秒数%一天的秒数

// var hour=d%(24*60*60);
// var hour=hour/(60*60);

// var hour=d%(60*60);
// var hour=parseInt(hour/60);

var hour=d%60;
console.log(hour);