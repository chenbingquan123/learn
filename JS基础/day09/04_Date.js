// var d=new Date();
// console.log(d);
// console.log(d.toLocaleString());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());

//修改

// var d=new Date('2020/10/22 15:33:40');

// d.setFullYear(2017);
// d.setMonth(11);// 0-11   1月-12月
// // setDate()
// // setHours()
// // setMinutes()
// // setSeconds()
// // setDay()    
// // setTime()   
// //设置一周后：先获取当前的日期加7，用结果作为要设置的日期
// d.setDate(d.getDate()+7);
// //设置三个小时后
// d.setHours(d.getHours()+3)

// console.log(d.toLocaleString);

//一个员工入职 2020/10/22
var d1=new Date('2020/10/22');
var d2=new Date(d1);//复制一个对象
//复制一份入职时间，作为到期时间
var d2=d1;
//3年后合同到期，计算出到期时间
d2.setFullYear(d2.getFullYear()+3);
//复制一份到期时间，作为续签时间
var d3=new Date(d2);
//合同到期前一个月续签

//如果是周末提前到周五
if(d3.getDate()===6){
    d3.getDate(d3.getDate()-1);
}else  if(d3.getDate()===0){
    //如果是周日，提前两天到周五
    d3.getDate(d3.getDate()-2)
}

//分别打印出两个月日期时间的本地字符串
console.log(d1.toLocaleDateString());
console.log(d2.toLocaleDateString());
//打印出续签合同时间的本地字符串
console.log(d3.toLocaleDateString());