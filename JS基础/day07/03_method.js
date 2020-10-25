// var ran={
//     ename:'然哥',
//     sex:'女',
// //方法
// play1:function(){
// //方法内部访问属性名
// //访问当前所在的对象   this
//     console.log(this.ename+'正在跑接力赛');
// },
// play2:function(){
//     console.log(this.ename,'正在玩单杠');
// },
// }; 
// //调用对象中的方法
// ran.play1();
// ran.play2();
// console.log(ran);

// 练习：创建一个圆对象，包含属性有半径和圆周率，添加两个方法，分别是计算圆的周长和面积，最后调用
// var yuan={
//     r=34,
//     pi=3.14,
// len:function(){
//      console.log(2*this.pi*this.r);
// },
// area:function(){
//       console.log(this.pi*this.r*this.r)
//    }
// };
// cricle.len();
// cricle.area();

// 练习：创建一个计算机对象，添加两个方法，传递任意两个数字，分别实现计算相加和相减并返回结果

var calc={
add:function(a,b){
    return a+b;
   },
reduct:function(a,b){
    return a-b;
}
}    
console.log( calc.add(5,7));
console.log( calc.reduct(8,5));

console.log( typeof calc);