console.log('这是然哥的眼睛模块');
//模块作用域
//局部变量，只能在当前模块下访问到

let a=123456;
let b=5;
//局部函数
function  fn(b){
    zc2=(2*Math.PI*b ).toFixed(2) ; //周长2
    mj2=(Math.PI*(b*b)).toFixed(2);//面积2
}
//导出的内容(module.exports)，默认是一个空对象
//如果要到处哪些内容，只需要把这些内容放入到空对象中
//导出的对象
module.exports={
    b1:b,
    a1:a,
    myfn: fn


};
