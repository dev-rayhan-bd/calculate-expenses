function getTextElementValueById(elementId){
    const field = document.getElementById(elementId);
    const fieldString = field.innerText;
    const fieldStringValue = parseFloat(fieldString); 
    return fieldStringValue;
}

document.getElementById('btn-savings').addEventListener('click',function(){
    const savingsField =getElementValueById('savings-field');
    if(isNaN(savingsField)){
        alert('please provide a valid number');
        return;}
    const incomeField = getElementValueById('income-field');
    const savingsFieldPercentage = savingsField/100;
    const savingsTotal = incomeField*savingsFieldPercentage;
    setTextElementById('saving-total',savingsTotal);
    const remainingBalance = getTextElementValueById('balance');
    const remainingBalanceValue = remainingBalance - savingsTotal;
    setTextElementById('remain-balance',remainingBalanceValue);
   
})