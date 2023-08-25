localStorage.setItem("user","Akshay");

localStorage.setItem("Age",23);




let res= localStorage.getItem("Age");

console.log(res);

localStorage.clear();   //  we can clear the localStorage .

localStorage.removeItem("Age");  // we can remove particular element by using remove function.

let res1 =localStorage.key("0");  // we can use key to get the value by using index number.

console.log(res1);

let res2 = localStorage.length;         // we can use length() to get the length of the localStorage.

console.log(res2);



