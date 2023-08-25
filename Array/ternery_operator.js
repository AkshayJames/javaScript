let num=[20,30,40,50];

num.forEach((ele,index) => ele ===30 ? num[index] = 60 : num[index]=100);

console.log(num);