function plusOne(arr){
let num=0;
for(let i=0;i<arr.length;i++){
    num=num*10+arr[i]
}
num+=1;
let str=""+num;
let res=[];
for(let i=0;i<str.length;i++){
    res.push(parseInt(str[i]))
}
return res;
}
console.log(plusOne([1,2,3]))