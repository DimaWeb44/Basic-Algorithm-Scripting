function repeatStringNumTimes(str, num) {
 var rep = ""
 if (num <= 0) return ""
 else {
    for (let i = 0; i < num; i++)
    rep += str 
 }
  return rep;
}

repeatStringNumTimes("abc", 3);
