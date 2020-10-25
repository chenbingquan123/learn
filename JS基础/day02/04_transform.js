//拼接
//var n1=2+'3';//'23'
//console.log(n1,typeof n1);

/*var n2=2+true; //2
var n3='4'+true;//'4true'
console.log(n2,typeof n2);*/

/*var  a=1,b=true,c='tedu';
   console.log(a+b+c);
   console.log(b+c+a);
   console.log(c+a+b);*/

/*/假设从后端获取到了商品的名称和操作系统，最终打印出以下形式
var title='小米Air';
var os='windows10';
console.log('商品名称：'+title+'操作系统：'+os)*/

/*var eid=1;
var ename='陈';

console.log('员工编号：'+eid+'员工姓名：'+ename)；*/
  

/*var m1='5'-2;
var m2='2'*'3';
var m3=true/'2';
var m4='5a'-2;
var m5=null-1;
var m6=3+undefined;
console.log(m6,typeof m6);*/

//NaN Not a  Mumber  不是一个数字
//Number()
//所有隐式转换为数值都是调用Number函数

/*var o1=Number('5a');
var o2=Number('5');
var o3=Number(true);
var o4=Number(undefined);
var o5=Number(null);


console.log(o5);*/

//强制转为整型
var p1=parseInt(1.9);//1
var p2=parseInt('3.14');//3
var p3=parseInt('3.14a');//3
var p4=parseInt('a3.14');//NaN
var p5=parseInt(true);//NaN
var p6=parseInt(undefined);//NaN
var p7=parseInt(null);//NaN
//console.log(p5,p6,p7);

var a1=parseFloat('5.18');//5.18
var a2=parseFloat('4.7a');//4.7
var a3=parseFloat('a4.7');//NaN
var a4=parseFloat('3b');//3
//console.log(a1,a2,a3,a4);

//强制将数值和布尔型转为字符串
var num=5;
//将转换后得到的字符串保存到变量str中
var str=num.toString();
console.log(str,typeof str);