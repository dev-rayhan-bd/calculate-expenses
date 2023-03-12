
document.getElementById('btn-calc').addEventListener('click',function(){
    const incomeField = getElementValueById('income-field');
    
    if(isNaN(incomeField)){
        alert('please provide a valid number');
        return;}

    const foodField = getElementValueById('food');
    if(isNaN(foodField)){
        alert('please provide a valid number');
        return;}
    const rentField = getElementValueById('rent');
    if(isNaN(rentField)){
        alert('please provide a valid number');
        return;}
    const clothField = getElementValueById('cloth');
    if(isNaN(clothField)){
        alert('please provide a valid number');
        return;}
    const spendMoney = foodField+rentField+clothField;
    if(incomeField<spendMoney){
        alert('আয় বুঝে ব্যয় করুন');
        return;
    }
    const balanceStay = incomeField-spendMoney;
    const balanceRemaining = incomeField-spendMoney;
    const expenseTotalValue = setTextElementById('expense-total',spendMoney);
    const balanceValue = setTextElementById('balance',balanceRemaining);

})