 function chunkArrayInGroups(arr, size) {
  let t = [];
  let r = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) t.push(arr[a]);
    else {
      t.push(arr[a]);
      r.push(t);
      t = [];
    }
  }

  if (t.length !== 0) r.push(t);
  return r;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
