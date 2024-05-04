const URL="https://open.er-api.com/v6/latest/USD";
let btn=document.querySelector("button");
let val=document.querySelector(".answer");


btn.addEventListener("click",getRate);

async function getRate(){   
    let drp= document.querySelector("#mySelect").value;
    let input=document.getElementById("userin").value;
    let response=await fetch(URL);
    let responseinJS= await response.json();    
   
    let ans= responseinJS.rates[drp];
    val.innerHTML= input+ '<span> USD = </span>'+ input*ans +' ' +drp;
   }
