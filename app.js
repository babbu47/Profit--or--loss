var tprice=document.querySelector("#todayprice");
var ns=document.querySelector("#totalstocks");
var cprice=document.querySelector("#currentprice");
var check=document.querySelector("#buto");
var writetext=document.querySelector(".textmessage")
function calculateProfitloss(initial,snumber,current)
{ writetext.style.display="none"
    if(initial>current)
    {
        writetext.style.display="block"
        var loss=Number(initial)-Number(current)
        var losspercentage=(loss*100)/initial
        writetext.innerText= "Loss is"+" "+loss+"& loss percentage is"+losspercentage;
    } 
    else if (initial<current)
    { writetext.style.display="block"
        var profit=(Number(current)-Number(initial))*snumber
        var profitpercentage=(profit*100)/initial
        writetext.innerText= "profit is"+" "+profit+"& profit percentage is"+profitpercentage

    }
    else
    { writetext.style.display="block"
        writetext.innerText="NO pain No gain";
    }

}

check.addEventListener("click",calculateProfitloss((tprice.value),(ns.value),(cprice.value)))

