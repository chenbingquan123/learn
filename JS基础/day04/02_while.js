//打印10次煎饼
// //范围1-10
// //初始值I记录循环开始的值
// var i=1;
// while(i<=10){ //循环条件 

//     //循环体
//     console.log('煎饼',i)
//     //增量：i变化起来
//     i++;
// }

// //练习:使用循环打印20-11之间左右的整数
// var i=20;
// while(i>=11){
//     console.log(i);
// i--;
// }
//练习：使用循环打印出80 75 70 65 60；
// var i=80;
// while(i>=60){
//     console.log(i);
//     i=i-5;
// }
// console.log('循环结束后',i);
//练习：使用循环，结合if判断，打印出1-100之间所有的偶数
// var i=1;
// while(i<=100){
//     if(i%2===0){
//     console.log(i);}
//     i++;
// }
//练习：使用循环计算1-100之间所有整数的和
// var i=1;
// var sum=0;
// while(i<=100){
   
//     sum+=i;
 
//     i++;
// }
// console.log(sum);

//练习 计算1-100之间所有奇数的和
var i=1;
var sum=0;
while(i<=100){
    if(i%2===1){
        sum+=i;
    }
   i++;
}
console.log(sum);