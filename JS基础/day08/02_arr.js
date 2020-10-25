// var arr=['a','b','c','d'];
// //翻转
// console.log(arr.reverse());
// console.log(arr);

// var arr=[23,9,78,6,45];
// arr.sort(function(a,b){
//     return a-b;//从小到大
// })
// //默认按照Unicode编码从小到大
// //按照数字排
// console.log(arr)

// var arr=['谢涵普','胡博文','达浩正','刘璐','刘佳龙','刘大宇','黄例'];
// // arr.slice(2);
// // console.log(arr.slice(2));
// // console.log(arr.slice(2,4));
// console.log(arr.slice(-3,-1));

// 练习：创建数组包含a-h，每个字母是一个元素，分别截取b-d，f；把两部分拼接起开
// var arr=['a','b','c','d','e','f','g','h'];
// var a=arr.slice(1,4);
// var b=arr.slice(-3,-2);

// console.log(a.concat(b));

// var arr=['谢涵普','胡博文','达浩正','刘璐','刘佳龙','刘大宇','黄例','刘熊思'];
// // arr.splice(4,2);
// // console.log(arr);
// // console.log(arr.splice(-3,2));
// console.log(arr.splice(2,0,'陈帅','周勃','张海洋'));
// console.log(arr);

// 练习：创建数组包含a-h，删除d e，替换f为m，在下标1的位置插入z
// var arr=['a','b','c','d','e','f','g','h'];
// arr.splice(3,2);
// arr.splice(-3,1,'m');
// arr.splice(1,0,'z');
// console.log(arr);


var arr=['谢涵普','胡博文','达浩正','刘璐'];
// console.log(arr.push('王骄傲','然哥'));//末尾添加
// console.log(arr.pop());//末尾删除（每次只能删除一个）
arr.unshift('然哥','东哥');//开头添加
arr.shift();//开头删除（每次只能删除一个）

console.log(arr);