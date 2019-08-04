function stringRotation(s1, s2) {
  return (s2 + s2).includes(s1) && s1.length == s2.length;
}

console.log(stringRotation("waterbottle", "erbottlewat"));
console.log(stringRotation("waterbottle", "bottlwater"));
