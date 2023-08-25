do
{
    var bmi =parseInt(prompt("enter your bmi"));
    alert('you have entered ${bmi}');
    
    if(bmi<18.5) 
    {    
      alert("you are underweight");
    }   
    else if(18.5>=bmi && bmi<=25)
    {
      alert("you are healthy");
    }
    else if(bmi>25)
    {
      alert("you are obese");
    }
    else alert("you have enter a invalid entry");

 }while(false);
 alert('bye');