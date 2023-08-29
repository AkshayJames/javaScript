var mobiles=[
[1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
[1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5g"],
[1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
[1003,"redmi","mi 11 lite",30000,"mediatek","LED","4g"],
[1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
[1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5g"],
[1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
[1007,"one plus","nord 2",15000,"mediatek","LED","4g"]
[1008,"vivo","model 2",25000,"mediatek","LED","3g"]
]

// Print all mobile namesPrint all mobile prices Print only mobiles with samsung brand print all mobile phones below 25000Print mobile details of avaialable in price range of 25k to 30kList all 5g mobile namesList all 5g mobiles under 35000List all samsung mobile whose band=4g and dispaly type is AMOLED

const index1=mobiles.map(mob =>mob [4]);

const index4=mobiles.map(mob => mob[2]);

console.log(index1);

console.log(index4);


let samsungMobile=mobiles.filter((mob)=>mob[1] === 'samsung');

console.log(samsungMobile);