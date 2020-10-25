//全局作用域
//全局函数
// function fn(){

// }
// // 闭包
// function fun1(){
//     //局部函数
//     function fun2(){
//      var n=1;
//           console.log(n);
//     }
// fun2();    
// }
// fun1();
//在全局访问局部函数
// fun2();//报错

//练习：创建一个函数，能否在创建之前调用到
foo();
function foo(){
console.log(0);
}
