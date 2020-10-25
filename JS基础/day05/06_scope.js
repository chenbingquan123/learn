//变量提升：JS程序执行前，会将var声明的变量提升到所在作用域的最前面，只是提升证明，赋值不提升
// var a;
// console.log(a);
// var  a=1;c
// a=1;

// function fn(){
//     // var b;
//     console.log(b);
//     var b=2;
// }
// fn();

//查看以下程序的输出结果是什么
//  var c=5;
// function fun(){
//     console.log(c);
//     c=7; //提升到当前作用域的最前边
// }
// fun();

//形参：局部可以访问到，不能被局部以外访问到
// function foo(n){
//     //n=2;
// }
// foo(2);
// console.log(n);

var m=9;
function bar(m){
    //m=3 、、参数m属于局部变量
    //参数m的值加2，没有影响全局m
    m=m+2;
}
bar(3);
//访问全局的m
console.log(m);