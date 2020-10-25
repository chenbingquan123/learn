//打印1-10之间所有整数，不包含五
// for(var i=1;
//     i<=10;
//     i++){
//    //当i为5的时候
//    if(i===5){
//        continue;//跳出循环，不执行之后的循环
//    };     
//      console.log(i);
//     };

for(i=1;
    i<=100;
    i++){
    //当i为偶数，跳过本次循环
        if(i%2===0){
    
        continue;}
    
        console.log(i);
     }   ;
    