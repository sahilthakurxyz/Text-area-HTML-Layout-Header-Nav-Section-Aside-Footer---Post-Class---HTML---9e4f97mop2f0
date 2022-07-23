const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const result = document.getElementById("result");
const currency1Select = document.getElementById("currency1"); 
const currency2Select = document.getElementById("currency2"); 

fetch("https://api.frankfurter.app/currencies")
.then((data) => data.json())
.then((data) => {
    display(data);
});

function display(data){
    const entries = Object.entries(data);
    for(var i = 0; i < entries.length; i++){
        select[0].innerHTML +=`<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML +=`<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
}

btn.addEventListener("click",() => {
    var currency1 = select[0].value;
    var currency2 = select[1].value;
    var value = input.value;
    if(currency1 != currency2){
        convert(currency1, currency2, value);
    }else{
        alert("Choose Different Currencies !!!");
    }
});
function convert(currency1, currency2, value){
 const host = "api.frankfurter.app";

 fetch(`https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`)
 .then((val) =>val.json())
 .then((val) => {
    console.log(val.rates);
    result.value =val.rates[currency2]
 });
 }

currency1Select.addEventListener("change",() => {
    input.value ="";
    result.value ="";
});

currency2Select.addEventListener("change",() => {
    input.value ="";
    result.value ="";
});