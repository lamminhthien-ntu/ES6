var numbers = [1,2,3,4,5,6,7,8,9,10];

for (var number of numbers) console.log(number);

console.log('\nUsing for each old\n');
//Use for each (old)
numbers.forEach(function(number){
    console.log(number);
})