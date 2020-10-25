// function add(a,b){
//    console.log(a+b);
//    //return执行，跳出函数，结束函数的调用
//     return a+b;
//     //return;
//     console.log'结束'
// };
// var n1=add(70,80);
// console.log('总成绩：'+n1);
// // 练习：创建函数getMax1，传递任意两个数字，返回最大值
// function getMax1(a,b){
    
    
//     if(a>b){
//         return a;}else{
//         return b;
//         }
//         }


// var m=getMax1(2,5);
// console.log(m);

// 练习：创建函数getMax2，传递任意三个数字，返回最大值
// function getMax2(a,b,c){
    //  if(a>b && a>c){
    //      return a;
    //  }else  if(b>c){
    //      return b;
    //  }else{
    //      return c;
    //  }
    //  }
// var m=a>b ?  a:b;
// return m>c ? m :c;
// }

// return(a>b ? a  :b)>c   ?  (a>b ? a : b) : c;
// }

// var r=getMax2(19,10,12);
//  console.log(r);


// 练习：创建函数getStatus,传递订单的状态码，返回对应的中文状态。
// 1 等待付款  2 等待发货 3  运输中
// 4 已签收   5已取消
// 使用swtich-case
// function getStatus(n){
    // switch(n){
    // case 1: 
    //    return '等待付款';
    // case 2:
    //  return '等待发货';
    // case 3:    
    //    return  '运输中';
    // case 4:
    //    return  '已签收';
    // default:
    //    return  '已取消';  

    // };
    // if(n===1){
    //     return '等待付款';
    // }else if(n===2){
    //     return '等待发货';
    // }else if(n===3){
    //     return '运输中';
    // }else if(n===4){
    //     return '已签收';
    // }else {
    //     return '已取消'
//  } ;
  
// var m=getStatus(5);
// console.log(m);

// 练习：创建函数isRun，传递任意一个年份，查看是否为闰年，返回一个布尔型的值

// function isRun(a){
//     if(a%4===0  &&  a%100!==0  ||  a%400===0){
//         return true;
//     }else{
//         return false;
//     }
// }
//return(a%4===0  &&  a%100!==0  ||  a%400===0) ?  true  :  false;}

// return a%4===0  &&  a%100!==0  ||  a%400===0;   }
// var b=isRun(1560);
// console.log(b);
