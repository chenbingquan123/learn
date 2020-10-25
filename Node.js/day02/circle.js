//计算面积

// function getarea(r){
    
//    return  (Math.PI*(r*r)).toFixed(2)//面积
     
// };
// function getlen(r){
    
//     return  (2*Math.PI*r).toFixed(2) ;
 
// };


//对象
let person={
    name:'然哥',
    sex:'女'
}




//  module.exports={
//   area:getarea,
//   len:getlen,
//   ran:person
// };

//把已有的对象，直接作为倒出对象
module.exports=person;

console.log(__filename);//绝对路径+模块名称
console.log(__dirname);//绝对路经

