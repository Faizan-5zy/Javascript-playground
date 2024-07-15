arre = ["one", "one", "one", "one", "two", "three"];
obj = {};

arre.forEach((Element) => {
  obj[Element] = (obj[Element] || 0) + 1;
});

console.log(obj);
