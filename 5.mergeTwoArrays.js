let arr1=[1,2,3,4,5,6,7,8,9]
let arr2=[11,12,13,14,15,16,17,18,19,20]

let mergeArr=[]

for (let i=0; i<arr1.length; i++){
  mergeArr[i]=arr1[i]
}
for (let i=0; i<arr2.length; i++){
  mergeArr[arr1.length+i]=arr2[i]
}
console.log(mergeArr)

// Default way of arrays merging

mergeArr2 = [...arr1,...arr2]
console.log(mergeArr2)

// Merging two arrays while using while loop but this will also sort array too

let index1 = 0
let index2=0
let index3=0
while (index1<arr1.length && index2<arr1.length){
  if(arr1[index1]<arr2[index2]){
    mergeArr[index3]=arr1[index1]
    index1++
  }else{
    mergeArr[index3] = arr2[index2];
    index2++;
  }
  index3++;
}
while(index1<arr1.length){
  mergeArr[index3]=arr1[index1]
  index1++;
  index3++
}
while(index2<arr2.length){
  mergeArr[index3]=arr2[index2]
  index2++
  index3++

}
console.log(mergeArr)
