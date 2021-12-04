function findLongestWordLength(str) {
  let arr = str.split(' ')
  let arr1 = []
  for (let i = 0; i < arr.length; i++){
    arr1.push(arr[i].length)
  }
  return  Math.max.apply(null, arr1)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
