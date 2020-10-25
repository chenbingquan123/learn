//仅仅提升声明 赋值没有跟着提升
//fun();
//函数声明创建
function fn(){

}
//使用匿名函数创建
//变量名称就是函数名称
//函数表达式创建
var fun=function(){
   //函数体
   console.log(2);
  }

//调用
// fun();
// console.log(fun);
// console.log(fn);


// 练习：使用函数表达式创建函数，计算任意两个数字相加的和并返回结果
var  n=function n1(a,b){
   for(var n2=a,sum=0;n2<=b;n2++){
       sum+=n2;
   }
   return sum;
}
      
console.log(n(2,30));