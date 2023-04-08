let arr=[1,2,3,4,5,6]

let position=2;

for (let i=position; i<arr.length; i++){
  arr[i]=arr[i+1]
}

arr.length=arr.length-1;
console.log(arr)

// We can perform the same logic using splice 

arr.splice(position,0)
console.log(arr);
