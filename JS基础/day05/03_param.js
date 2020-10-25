//计算任意两个数字相加的和
// function add(a,b){//形参（形式上的参数）接收数据
//      console.log(a+b);
    
// }
// //调用
// add(1,3);//实参（实际传递的参数）
// add(15,12);


// 练习：创建函数getSun，在函数体中计算1-任意数字之间所有整数的和并打印出来，调用多次
// function getSum(a){
//     for(var i=1,n=0;i<=a;i++){
//         n+=i;
//     }
//     console.log(n);
// }

// getSum(10);

// 练习：创建函数getSun，计算出任意两个年份之间所有的闰年个数并打印出来，调用多个参数
function getSum(n1,n2){
    //计算n1-n2之间所有的闰年个数
    for(var i=n1,count=0;i<=n2;i++){
        if(i%4===0 && i%100!==0 || i%400===0){
            count++;
        }
    }
    console.log(count);
}
getSum(1000,2000);
getSum(100,200);
