function findElement(arr, func) {
  let num = 0;
 top:
  for (let i = 0; i < arr.length; i++){
    num = arr[i]
      if (func(num)) {
       return num ;
     } 
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
