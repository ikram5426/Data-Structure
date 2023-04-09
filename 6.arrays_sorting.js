//Array Sorting using for loop
let arr = [25, 1, 4, 7, 87, 96, 33, 0, 112, 102];

// //For sorting we using nested loop so every el compare with every el available in array
// let temp;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
//For descending sort we need to change only the '>' to '<' 
    if (arr[j] > arr[j + 1]) {
      //Swiping value of indexes
      temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
}

//Default way 
//For ascending sort
arr.sort((a,b)=>{
  if(a<b){
    return -1
  }
})

//For Descending sort
arr.sort((a, b) => {
  if (a > b) {
    return -1;
  }
});
console.log(arr);
