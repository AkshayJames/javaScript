let text=`AkshaY`;

const obj={};

const res=text.toUpperCase();

console.log(res);

for(let i=0; i<text.length; i++){

    console.log(i);

  if(res[i] in obj) {

        obj [res[i]]+=1;

}  else {

    obj [res[i]] =1;
    
}

}

console.log(obj);