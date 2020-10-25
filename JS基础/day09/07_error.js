// console.log(1)
// // var a=1；  //语法错误

// var b=2;
// // console.log(b1) //引用错误

// var arr=['a','b','c'];
// // console.log(arr.revers());//类型错误

// // var laptop=new Array(-3);//范围错误
// // console.log(laptop);

var age=19;
// if(age<18  ||  age>60){
//       //自定义错误
//       throw'请提供一个合法的年龄'
// }

try{
  //尝试执行，放可能出现的错误代码
  if(age<18 || age>60){
      throw'请提供一个合法的年龄'
  }
} catch(err){
    //捕获错误，解决错误
    //err：形参，接收try中出现的错误信息
    console.log(err);
    age=18;
}

console.log(age);
console.log(2);
