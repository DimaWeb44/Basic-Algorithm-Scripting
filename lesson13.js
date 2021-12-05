function bouncer(arr) {
 let arr1 = []
 for (let i = 0; i < arr.length; i++){
   if (arr[i]) {
     arr1.push(arr[i])
   }
 }
  return arr1;
}

bouncer([7, "ate", "", false, 9]);
