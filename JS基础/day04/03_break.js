//循环产生1-10之间所有整数
// var i=1;
// while(true){//循环条件
// console.log(i)
//  //一旦i为10，强制结束循环
//  if(i===10){
//      break;
//  }
//     i++
// }

//当循环条件为true的情况下，计算11-20之间所有的整数的乘积

var i=11;  
var n=1;
while(true){ 
//i代表11-20之间的值
//判断i是否为20   
  n*=i;
 if(i===20){
    
     break;
 }
  
    i++;
}
console.log(i);
