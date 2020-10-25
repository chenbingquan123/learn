//使用内置构造函数
// var emp=new Object();
// //单独访问每个属性，添加属性值
// emp.eid=1;
// emp.ename='然桑';
// emp['dname']='研发部';

// console.log(emp);

//练习：创建一个轮播图对象，包含有编号，图片名称，图片大小，图片来源
//  var rotation=new Object();
// rotation.number='008';
// rotation.name='百鸟朝凤图';
// rotation['size']='1200*1500*70';
// rotation.origin='人民邮电局';
// // console.log(rotation);


// for( var k in rotation){
// //k代表对象中的每个属性名

// console.log(k,rotation[k]);
// }


// 2）创建对象（字面量），包含有一组学生的成绩属性，遍历属性，计算出总成绩和平均成绩
var  student={
    chinese:95,         //语文
    matics:98 ,         //数学  
    english:93 ,        //英语
    physics:95,         //生物
    chemistry:96        //化学
}
var sum=0;
var i=0;
for(var k in student){
     i++;
     sum+=student[k];
}   
   
   console.log(sum,i,sum/i);

   

