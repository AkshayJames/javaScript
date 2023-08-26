let students = {

    name : 'Akshay',

    Age : 23,

    course : 'MERN',

}

console.log(students.Age);              //now it is an object.

let res = JSON.stringify(students);

console.log(res);

console.log(res['age']);   //  it is not an object after JSON it will be returned as a string.




