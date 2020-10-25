// //循环打印1-10之间所有的整数
// for(var i=1;
//    i<=10;
//    i++){
//        console.log(i);
//    }

// for(var  i=1; i<=100; i++){
   
//    if(i%4===0){
//         console.log(i)
//     };
// };

// for(var i=1,sum=0;
//     i<=100;
//     i++
//     ){if(i%5===0){
//         sum+=i;
//     }
//     }
//     console.log(sum);


//练习：打印出1900-2000年所有的闰年；
// for(var year=1900;
//     year<=2000;
//     year++){
//     if(year%4===0 &&  year%100!==0 || year%400===0){
//         console.log(year);
//     };   
//     };

//练习：假设有本金10000元，利率是3%，计算五年后的本金和利息共有多少
// var money=10000;
// for(var year=1;
//     year<=5;
//     year++
//     ){
//        money=money+money*0.03;
//           };
//     console.log(money);
for(var i=1,str='';
    i<=9;
    i++){
       str+=i;
    };
console.log(str);
