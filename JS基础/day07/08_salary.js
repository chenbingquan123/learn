// var salary=[6000,13000,9000,8500,4600,9800];
// //for-in
// for(var k in salary){
//     console.log(k,salary[k]);
// }
//练习:使用for循环遍历数组,得到每一个元素

// for(var i=0,sum=0;i<salary.length;i++){
    
//     console.log(i,salary[i]);
//     sum+=salary[i];

// };
// console.log(sum,sum/salary.length);

// 练习：创建数组包含有一组员工姓名，将姓名为‘然哥’的数据修改为‘ran’
// var ename=[
//     '然哥','东哥','dong'
// ]
// for(var i=0;i<ename.length;i++){
//     // ename[i]每个元素
// if(enamel[i]==='然哥'){
//         ename[i]='ran';
//     };
// }
// console.log(ename[i]);

//练习:创建数组,包含有一组成绩,统计成绩在70-80之间的数量

// var score=[76,88,62,98,92,72];
// for(i=0,count=0;i<score.length;i++){
//     // console.log[i];
// if(score[i]>=70 && score[i]<=80){
//      count++;

// }   
// }
// console.log(count);
// 练习:创建数组,包含有一组数字,遍历数组查找最大值

var number=[563,56,8949,45646,213,1212];
//声明变量,用于保存最大值,初始化第一个数作为最大值
var max=number[1];
//遍历数组,让max依次和每个元素比较
for(var i=0;i<number.length;i++){
    //   number[i]代表每个元素
    //判断max是否小于任意一个元素,如果小于则把该元素放到max
    if(max<number[i]){
        max=number[i];
    }
}
console.log(max);