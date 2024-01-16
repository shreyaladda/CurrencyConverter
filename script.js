let api=`https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;
const fromdd= document.getElementById("fromcurrselect");
const todd= document.getElementById("tocurrselect");
const result = document.getElementById("result");
/*const amount= document.getElementById("amount").value;
console.log(amount);*/

currencies.forEach((currency) => {
    const option=document.createElement("option");
    option.value=currency;
    option.text=currency;
    fromdd.add(option);
});

currencies.forEach((currency) => {
    const option=document.createElement("option");
    option.value=currency;
    option.text=currency;
    todd.add(option);
});

fromdd.value="USD";
todd.value="INR";

let convertcurr=()=> {
    const amt=document.querySelector("#amount").value;
    const fromcurr= fromdd.value;
    const tocurr=todd.value;

    if(amt.length !=0)
    {

        fetch(api).then(resp=> resp.json()).then((data)=> {
            let fromexchangerate= data.conversion_rates[fromcurr];
            let toExchangerate= data.conversion_rates[tocurr];
            const convertedamt= (amt/fromexchangerate)*toExchangerate;
            result.innerHTML=`${amt} ${fromcurr} = ${convertedamt.toFixed(2)} ${tocurr}`;
        });
    }
    else{
        alert("Please fill in the amount");
    }
};

document
.querySelector("#submit")
.addEventListener("click", convertcurr);
window.addEventListener("load", convertcurr)
