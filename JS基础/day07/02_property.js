// var emp={
//     eid:002,
//     ename:'然哥'

// };
// //检测属性是否存在
// // console.log(emp.sex===undefined);

// // console.log(emp.hasOwnProperty('eid'));

// console.log('ename' in emp);

// 练习：创建一个商品对象，包含有商品的编号，名称，价格；如果价格属性存在打九折，如果产地属性不存在则添加该属性

var goods={
    did:1,
    title:'oppo fand',
    price:3599
}
if(goods.hasOwnProperty('price')){
     goods.price*0.9;
};
if(goods.hasOwnProperty('place')){
      goods.place='中国';
};
console.log(goods);