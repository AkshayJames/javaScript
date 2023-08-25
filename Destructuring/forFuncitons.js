let arr = [`Arun`, 23 , `Kochi`];

const [username, age, place] = arr;

console.log(username);

console.log(place);

const [username1,...arr2] = arr;     // spread operator will store rest of the values other than username

console.log(arr2);