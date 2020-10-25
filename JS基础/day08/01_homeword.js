//创建数组保存多个元素，使用遍历数组翻转数组中的元素
// var arr1=['a','b','c','d'];
// //转杯一个新数组，用于存放翻转后的元素
// var arr2=[];
// //遍历数组，倒着依次找到每个元素
// for(var i=0;i<arr1.length;i++){
//      //对应元素的下标=数组的长度-i-1
//      //console.log(arr1.length-i-1,arr1[arr1.length-i-1]);
//    //把倒着找到的元素放到新数组arr2中 
//     arr2[i]=arr1[arr1.length-i-1];
// }
//    console.log(arr2);



//    创建数组保存一组数字，将数字进行从小到大的排序
var arr=[23,9,78,6,45];
//外层循环，控制循环的轮数
//比较的轮数要比元素的个数少1个

for(var i=1;i<(arr.length);i++){
//1
//2
//3
//4
//循环条件=数组长度-i
//内层循环，控制每一轮循环的次数
//每轮都是从第1个数开始往后比较，初始的值从下标0
for(var j=0;j<arr.length-i;j++){
//每次循环的目的，让当前的元素arr[j],和下一个arr[j+1]进行比较
//如果当前的大于下一个，则位置交换
    if(arr[j]>arr[j+1]){
       var c=arr[j];
       arr[j]=arr[j+1];
       arr[j+1]=c; 
    }   
  } 
}
console.log(arr)