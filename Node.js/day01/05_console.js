// console.log(1);
// console.info(2);
// console.warn(3);
// console.error(4);


console.time('ran')
for(let i=1;i<=100000;i++){
   
}
console.timeEnd('ran')

// 练习：使用for,while,do-while 循环100000次，查看各自的运行时间
console.time('while');
let i=1;
while(i<=100000){
  
   i++;
}
console.timeEnd('while');


console.time('do-while');
let j=1;
do{
    j++;
}while(j<=100000);
console.timeEnd('do-while');

