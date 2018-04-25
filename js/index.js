function billingFunction(checkboxtext){
    var labelvar = document.getElementById (checkboxtext);
  console.log ("here"); 
    if (same.checked) {
        billingName.value = shippingName.value;
        billingZip.value = shippingZip.value;
        billingName.style.fontWeight = 900 ;
        billingZip.style.fontWeight = 900 ;
        labelvar.innerHTML = "Click here to clear the fields.";
    }
    else{
  console.log ("else");
        billingName.value = "";
        billingZip.value = "";
        labelvar.innerHTML = "Click here if your Billing Information is the same as your Shipping Information."
    }  
}
