const obj ={
    A:1
}



if ("A" in obj) {
    obj["A"] +=1
}else{
    obj["A"] = 1
}

console.log(obj);

let string ="ABCDABAA"

for (let i=0;i<string.length;i++) {
    
if  (string[i] in obj){

    obj[string[i]]+=1

}else{
    obj[string[i]] =1
}

}
console.log(obj);

