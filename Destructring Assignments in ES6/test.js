var date = [10, 03, 2016]

//Convert all value from array into 3 variable (d,m,y)
var [d,m,y] = date;

//Print
console.log(`Day:  ${d} ,Month: ${m} , Year: ${y} \n`);

var [,,y] = date;
//Print
console.log(`Year: ${y} \n`);

var [d,,y] = date;
//Print
console.log(`Day : ${d} , Year : ${y}`);