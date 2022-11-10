// variable
let billInput = document.querySelector(".billInput");
let custom = document.querySelector(".custom");
let tip = document.getElementById("tip");
let reset = document.querySelector(".rest");
let percents = document.querySelectorAll(".percent");
let persons = document.querySelector(".numberInput");
let total = document.getElementById("total");
let errorText = document.querySelector('.errorText');
let billerror = document.querySelector('.errorbill');
let customValue = 0;
let person = 0;
let totalBill = 0;
let personbill = 0;
let personTip = 0;

percents.forEach((percent) => {
  percent.addEventListener("click", () => {
    person = persons.value;
    totalBill = billInput.value;
    if ( totalBill == 0) {
        billInput.classList.add('error');  
        billerror.classList.add('errorTextActive');
    }else if(person == 0){
        persons.classList.add('error');
        errorText.classList.add('errorTextActive');
    }
     else {
      
      billerror.classList.remove('errorTextActive');
      errorText.classList.remove('errorTextActive');
      billInput.classList.remove('error');  
      persons.classList.remove('error');
      let percenValue = percent.innerHTML.replace(/[^a-zA-Z0-9 ]/g, "");
      personbill = totalBill / person;
      personTip = (personbill * percenValue) / 100;
      tip.innerHTML = "$" + personTip.toFixed(2);
      total.innerHTML = "$" + (personbill + personTip).toFixed(2);
      reset.classList.add('restActive');
    }
  });
});

// for custom value
custom.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    customValue = custom.value;
    person = persons.value;
    personbill = totalBill / person;
    totalBill = billInput.value;
    personTip = (personbill * customValue) / 100;
    tip.innerHTML = "$" + personTip.toFixed(2);
    total.innerHTML = "$" + (personbill + personTip).toFixed(2);
    reset.classList.add('restActive');
  }
});
reset.addEventListener('click',()=>{
    billInput.value = 0;
    persons.value = 0 ;
    total.innerHTML = '$00' ;
    tip.innerHTML  = '$00' ;
    customValue.innerHTML='';
})