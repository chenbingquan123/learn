for(var i=1,sum=0;i<=4000;i++){
    sum+=i;
    //每次加入一个值，判断是否超过4000
    if(sum>4000){
        break;
     }
    }

console.log(sum,i);

// //打印所有的闰年
// for(var i=2000,count=0;i<=2100;i++){
//    if(i%4===0  &  i%100!==0  ||  i%400===0){
//    console.log(i);
//    //每次打印一个闰年，闰年的个数+1
//    count++;
//    if(count===10){
//      break;
//      }
//    }
// };
//  console.log(count);

// for(var i=1;i<=9;i++){
//     for(var j = 1, str='';j <= i; j++){
//         str+= j +'*' + i + '=' + (i * j) + ' ' ;
//     };
//     console.log(str);
// };

// for(var i = 9;i>=1 ;i--){
//     var  str='';
//     for(var j = 1,   str='';j <= i; j++){
//         str +=  ' '  +  j  + '*' + i + '=' + i * j;
//     };
//     console.log(str);
// };