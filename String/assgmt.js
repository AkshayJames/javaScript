let text='akshay';

const l=text.length;

console.log(l);

const res_map={};




// for (let i=0;i<str.length;i++){

//     // console.log(i);


//     let char=str.charAt(i);

//     console.log(char);

        

// }


text.split("").map(char=>char in res_map?res_map[char]++:res_map[char]=1);

console.log(text.split(""));

console.log(res_map);

