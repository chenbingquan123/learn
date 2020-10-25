// var str='Ran发明了煎饼机,ran爱好游泳,RAN爱好单杠,ran擅长养殖兔子';
//查找满足条件的第一个
//i -  ignore  忽略大小写  i是简写
// console.log(str.search(/ran/i));
//查找所有的
//g -  global  全局的 ig 是简写
// console.log(str.match(/ran/ig));
//查找并替换
// console.log(str.replace(/ran/ig,'xxx'));

// 将一句英文中每个英文单词的首字母转为大写，其余小写  （how are you) (how are you )
// var English='hOw arE you';
// var arr=English.split(' ');
// for(var i=0;i<arr.length;i++  ){

//   var  arr1=arr[i].substr(0,1).toUpperCase();
//   var  arr2=arr[i].substr(1).toLowerCase();
//   arr[i]=arr1+arr2;
// }
// console.log(arr.join(' '));




console.log('hOw arE you'.split(' ').map(str => str[0].toUpperCase() + str.substring(1)).join(' '))