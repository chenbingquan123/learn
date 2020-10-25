// var str='web前端';
// //console.log(str.length);
// //通过下标找到对应的字符
// console.log(str[0],str.charAt(0));

// 练习：声明变量保存字符串javascript，遍历字符串，统计A字符出现的次数
// var str='javascript';
// for(i=0,count=0;i<str.length;i++){
//     //    console.log(str[i],str.charAt(i));
//        if(str[i]==='a'){
//            count++;
//        }
// }
// console.log(count)
// //查看任意一个字符的Unicode码
// console.log(str[i],str.charAt(i));

// var str='javascript';
// //查找字符(字符串)的下标
// console.log(str.indexOf('s'));
// //查找字符最后一次出现的下标
// console.log(str.lastIndexOf('a'));

//正则表达式
// 练习：声明变量保存用户输入的邮箱，如果不含有@，打印‘邮箱格式不正确’，否则打印‘格式正确’
// var mail='337406374qq.com';
// if(mail.indexOf('@')===-1){
//      console.log('邮箱格式不正确')
// }else{
//     console.log('格式正确')
// };
// //英文字母转大写或者小写
//  var str='javasctipt';
//  console.log(str.toUpperCase());小写转大写
//  console.log(str.toLowerCase());大写转小写

//字符串截取
// var str='javasctipt';
// console.log(str.slice(4));
// console.log(str.slice(4,7));
// console.log(str.slice(-3,-1));

// var str='ran1234123@tedu.cn';
// //查看@的下标是多少
// console.log( str.slice(0,str.indexOf('@')));
// console.log( str.slice(str.indexOf('@')+1));

// var str='javascript';
// //按照长度截取
// console.log(str.substr(4));
// console.log(str.substr(4,3));
// console.log(str.substr(-3,2));

// 练习：声明变量保存一个人的身份证号，分别截取出出生的年月日和性别
// 142602199611152011
// var arr='142602199611152011';
// year=arr.substr(6,4);
// yue=arr.substr(10,2);
// day=arr.substr(12,2);
// sex=arr.substr(-1,1);
// if(sex%2===0){
//     sex='性别：女'
// }else{
//     sex='性别：男'
// }
// console.log(year+'年'+yue+'月'+day+'日'+sex);

//字符串转为数组
// var arr=['a','b','c']
// var str=String(arr);//a,b,c
// // console.log(str);
// //将字符串切割为数组
// var arr2=str.split(' ')
// console.log(arr2);

// web.2009.js.jpg
// 截取出文件的后缀名
var paper='web.2009.js.jpg'
arr=paper.split('.');

console.log(arr[arr.length-1]);