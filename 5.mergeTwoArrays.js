let arr1=[1,2,3,4,5,6,7,8,9,10]
let arr2=[11,12,13,14,15,16,17,18,19,20]

let mergeArr=[]

for (let i=0; i<arr1.length; i++){
  mergeArr[i]=arr1[i]
}
for (let i=0; i<arr2.length; i++){
  mergeArr[arr1.length+i]=arr2[i]
}
console.log(mergeArr)