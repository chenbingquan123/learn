//1.块级作用域
//var a     
//变量提升

// console.log(a);
// var a=1;
//同一个作用域下，重复声明同一个变量
// var b=2;
// var b=3;
// console.log(b);

//1.块级作用域

// let c=5;
// let c=7;
// console.log(c);

// {
//    //块级作用域
//   let num=3; //局部变量
// }
// console.log(num);

// 练习：使用for循环，计算1-100之间所有整数的和，使用let声明
// let sum=0;
// for(let i=1;i<=100;i++){
    
//     sum+=i

// };
// console.log(sum);


//2.函数增强
// function add(a=0,b=0,c=0){
//     console.log(a+b+c);
// }
// add(1,2,3);
// add(1,3)

// //3.箭头函数
// let arr=[23,9,78,45,6];
// // arr.sort( function(a,b){
// //  return a-b;
// // });

// // arr.sort( (a,b)=>{
// //     return a-b
// // });

// arr.sort((a,b)=>a-b);


// console.log(arr);

// 练习：使用函数表达式创建函数，匿名函数使用箭头函数形式，计算任意两个数字相加的和，并返回结果
// let fn=(a,b)=>a+b


// console.log( fn(10,3));


// var title='小米Ari';
// var price=4199;
// var detail='详情内容';
// console.log(`
// 标题：${title}
// 价格：${price}
// 详情：$
// `);


var emp={
    eid:3,
    uname:'然哥',
    sex:1,
    salary:40000

};
console.log(`
编号：${emp.eid}
名字：${emp.uname}
性别：${emp.sex ?  '男'  :   '女'}
工资: ${emp.salary.toFixed(2)}元
`);
 

