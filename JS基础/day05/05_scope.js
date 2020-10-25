// //全局作用域
// var a='北京市城管';//全局变量

// function shi(){
//     //函数作用域
//     var b='石景山城管';//局部变量
//     console.log(a);
// }
// //在全局作用域访问局部变量



// function hai(){
//     //函数作用域
//     var c='海淀区城管'//局部变量
// }
// shi();
//

// function fn(){
//     //不加var声明的变量是全局变量：严格模式下会报错
//      n1=3;
// }
// fn();
// console.log(n1);

function fun(){
    var m1=m2=m3=4;
/* 
 m3=4 //全局
 m2=m3//全局
 var m1=m2 //局部*/
}
fun();
console.log(m3);//4
console.log(m2);//4
console.log(m1);//报错