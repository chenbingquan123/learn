// 创建主模块（main.js)和功能模块（circle.js)，
// 在功能模块下创建两个函数，传递参数为半径，
// 分别计算出圆的周长和面积。
// 在主模块下引入功能模块后，调用两个函数

//引入功能模块circle.js
//把引入成功后的模块保存，的到另一个模块导出的内容
let arr=require('./circle.js');
// console.log(arr);

// // let bj1
// console.log(arr.area(3));
// console.log(arr.len(5));

console.log(arr);