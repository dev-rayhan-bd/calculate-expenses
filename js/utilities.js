function getElementValueById(elementId){
    const field = document.getElementById(elementId);
    const fieldString = field.value;
    const fieldStringValue = Number(fieldString); 
    return fieldStringValue;
}
function setTextElementById(elementId,value){
    const expenseTotal = document.getElementById(elementId);
    expenseTotal.innerText = value;
    
}