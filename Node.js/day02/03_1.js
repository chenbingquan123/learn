// 练习：在03_1.js文件中引入同一级的目录模块03_2，
// 目录中含有文件index.js，导出一个函数，计算任意三个数字相加的和
//    ./同一级
//    ../上一级
//    ../../上上级


let obj=require('./03_2');
console.log(obj)

console.log(obj.add(2,3,4));
