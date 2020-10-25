//  function say(){
//   for(i=1;i<=3;i++){
//       function say(){
//           console.log('循环');
//         }
//          say();
//     }
//  }
//   say();

// //   var 

// function fib(n) {
//     var n1 = 1, n2 = 1;
//     //从第三项开始，每项的值是前两项相加的和，循环就是从3开始，
//     //如果要求每项的值，只需要让n1和n2不断地往后挪动，要求哪一项，就是让n1和n2
//     // 挪动到哪一项，挪动结束后，n2的值就是所求项的值
//     for (var i = 3; i <= n; i++) {
//       //中间是挪动的过程，每循环一次，挪动一次
//       //挪动后，n1的值保存的是上一次n2的值，n2的值保存的是上一次n1和n2相加的和
//         var sum= n1;
//         n1=n2;
//         n2=sum+n2;
//       };
//       //挪动结束后，n2的值就是所求项的值
//     return n2;
// };
// // fib(5);
// console.log(fib(9));


// var i=0;
// function fn() {
//   console.log('从前有座山')
//   //每打印一次，记录一次
//   i++;
//   //如果i为3，结束函数调用
//   if(i===3){
//     return;
//   }
//   fn();

// } 
// fn();


function fib(n){
  // 当n为1或者n为2的时候 返回1
  if(n===1 || n===2){
    return 1;//结束函数调用
  } 
  //计算第n的值，只需要返回第n-1项和n-2项相加的和
  return fib(n-1)+fib(n-2);

}
fib(45);
console.log(fib(45));


// function say(n) {
//   if (n > 0) {
//       say(--n);
//       console.log('hi');
//   }
// }
// say(3);