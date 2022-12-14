let curr1=document.querySelector("#first");
let curr2=document.querySelector("#second");
let select=document.querySelector("select");
let logo1=document.querySelector(".fc");
let logo2=document.querySelector(".sc");
let info;
let aud,eur,inr,jpy,tur;
let x,y;
window.addEventListener("load",async (event)=>{

    let config = {
        headers: {
          apikey: "4o3QbWnGoyNUOz6932z0OvqmcQEu4Rs3",
        }
      }
info=await axios.get("https://api.apilayer.com/exchangerates_data/latest?symbols=INR%2CEUR%2CJPY%2CTRY%2CAUD&base=USD",config);
aud=info.data.rates.AUD;
eur=info.data.rates.EUR;
inr=info.data.rates.INR;
jpy=info.data.rates.JPY;
tur=info.data.rates.TRY;
x=inr;
y=1/x;
curr1.value=1;
curr2.value=x;
})

curr1.addEventListener("input",(event)=>{
curr2.value=curr1.value*x;
})
curr2.addEventListener("input",(event)=>{
curr1.value=curr2.value*y;
})
select.addEventListener("change",(event)=>{
let val=select.value;
if(val==1){
    x=inr;
    y=1/x;
    curr1.value=1;
    curr2.value=x;
    logo1.innerHTML="USD";
    logo2.innerHTML="INR";
}
else if(val==2){
    x=aud;
    y=1/x;
    curr1.value=1;
    curr2.value=x;
    logo1.innerHTML="USD";
    logo2.innerHTML="AUD";
}
else if(val==3){
    x=eur/inr;
    y=1/x;
    curr1.value=1;
    curr2.value=x;
    logo1.innerHTML="INR";
    logo2.innerHTML="EUR";
}
else if (val==4){
    x=tur/inr;
    y=1/x;
    curr1.value=1;
    curr2.value=x;
    logo1.innerHTML="INR";
    logo2.innerHTML="TRY";
}
else if(val==5){
    x=jpy/inr;
    y=1/x;
    curr1.value=1;
    curr2.value=x;
    logo1.innerHTML="INR";
    logo2.innerHTML="JPY";
}
})