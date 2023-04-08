let arr = [3, 5, 8, 2, 1, 9];

let position = 3
;
let newEl = 100;

//insertion on given element

//operation on element
for(let i=arr.length-1 ; i>=0;i--){
  if(i>=position){
    arr[i+1]=arr[i];
    if(i===position){
      arr[i]=newEl;
    }
  }
}
console.log(arr)