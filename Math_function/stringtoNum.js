let x = 9.96324;

let res = x.toFixed(3);
let res1 = x.toFixed(0);


console.log(typeof res);    //by default the type will be string 
console.log(typeof res1);    //by default the type will be string 

console.log(res);    
console.log(res1);

// WE CAN CONVERT STRING TO NUMBER BY THREE METHODS :

let type = Number(res);     // by using NUMBER method we can change the datatype string to Number;
let type1 = Number(res1);

console.log(typeof type);
console.log(typeof type1); 

let type2 = parseFloat(res);     // by using PARSEFLOAT method we can change the datatype string to Number;
let type3 = parseFloat(res1);

console.log(typeof type2);
console.log(typeof type3);


let type4 = parseInt(res);     // by using PARSEINT method we can change the datatype string to Number;
let type5 = parseInt(res1);

console.log(typeof type4);
console.log(typeof type5);

