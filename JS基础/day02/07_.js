//判断一个人的工资是否在6000-8000之间
//var salary=4000;
//console.log(salary>=6000 && salary<=10000);
//练习：声明变量分别保存用户输入的用户名和密码，如果用户名是'root'，并且密码是'123456'，打印true,否则false
//var uname='root';
//var upassword='123456'
//console.log(uname==='root' && upassword==='123456');

//判断一个人是否符合免费标准 要求老人或者儿童
//var age=6;
//console.log(age>=65 || age<=12);

//练习：声明变量保存用户名输入的用户名，如果用户名是root，或者是18112345678，或者是ran@tedu.cn

//var input='root';

//console.log(input==='root' || input==='18112345678' || input==='ran@tedu.cn');


//console.log(!false);

/*var num=5;
num>8  &&  console.log(a); //产生短路
num<3  ||  console.log(a);*/

//使用短路逻辑
//声明变量保存年龄，如果满18岁，打印‘成年人’

var age=21;
age>=18  &&  console.log('成年人')