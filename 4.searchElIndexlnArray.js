let arr=[1,2,3,4,5,6,7,8,9,10,11,12]

let findELIndex=5
let index=undefined;
for(let i=0; i<arr.length; i++){
  if(arr[i]===findELIndex){
index=i
break
  }
}
console.log(index)

// Default way of doing the same operation

console.log(arr.indexOf(findELIndex))
