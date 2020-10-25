//对象字面量
// var laptop={
//     title:'小米Ari',
//     color:'黑色',
//     price:3299,
//     'amde-in':'中国'

      
//    };

// console.log(laptop);

// var cars={
//     brand:'奔驰G500',
//     color:'黑色',
//     wide:'1867',     //宽
//     long:'4764',    //长
//    // high:'1954',    //高
//     'made-in':'德国'

// };
// // console.log(Cars);
// // console.log(cars.brand);
// // console.log(cars.high);
// cars.color='银色';  //修改
// cars.height=1955;//添加
// cars['made-in']='北京';//中括号内的内容都需要加引号
// console.log(cars);
// 练习：创建一个图书的对象，包含有图书的编号，名称，价格，作者；修改图书的价格，添加图书的出版社属性，打印整个对象

var book={
    bid:'001',
    ename:'高级程序设计',
    price:'￥129',
    author:'李松峰'
}
book.price='￥139';
book['publish']='人民邮电出版社';
console.log(book);

var laptop={
        title:'小米Ari',
        color:'黑色',
        price:3299,
        'amde-in':'中国'
    
          
       };
    //    创建对象（字面量），包含有一组学生的成绩属性，遍历属性，计算出总成绩和平均成绩
    console.log(laptop);

var  student={
    chinese:'95',        //语文
    mathematics:'98' ,    //数学  
    english:'93' ,        //英语
    physics:'95',          //生物
    chemistry:'96'        //化学
}