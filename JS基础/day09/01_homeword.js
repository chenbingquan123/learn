// 将一句英文中每个英文单词的首字母转为大写，其余小写  （how are you) (how are you )
var English=('hOw arE you  how  are  you')
//按照空格将字符串切割为数组，目的是为了得到每个单词
var arr=English.split(' ');
//遍历数组，得到每个单词

for(var i=0;i<arr.length;i++  ){
   //每个单词
   //截取首个字母，转为大写
  var  arr1=arr[i].substr(0,1).toUpperCase();
  //截取剩余的字符，转为小写

  var  arr2=arr[i].substr(1).toLowerCase();

  //把两部分拼接起来组成单词，替换之前数组元素
  arr[i]=arr1+arr2;
}
//把数组转为字符串，元素之间按照空格分隔
console.log(arr.join(' '));
// console.log(arr)