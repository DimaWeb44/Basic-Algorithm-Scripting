function mutation(arr) {
  let st1 = arr[1].toLowerCase();
  let st2 = arr[0].toLowerCase();
  for (let i = 0; i < st1.length; i++) {
    if (st2.indexOf(st1[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
