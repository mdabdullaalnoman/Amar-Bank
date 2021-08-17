// handle add deposit and sum in total balance------------------------
const depositBtn = document.getElementById('deposit-btn');
const depositInput = document.getElementById('deposit-input');
let   depositAmount = document.getElementById('total-deposit');
const mainBalance = document.getElementById('main-balance');


depositBtn.addEventListener('click' , function(){
    // get and set deposit amount
    const newDepositAmount = parseFloat(depositInput.value);
    const previousDepositAmount = parseFloat(depositAmount.innerText);
    const newDepositTotal = newDepositAmount + previousDepositAmount; 
    depositAmount.innerText = newDepositTotal;

    // update main balance
    const previousBalance = parseFloat(mainBalance.innerText);
    const newBalance = previousBalance + newDepositAmount;
    mainBalance.innerText = newBalance;

    depositInput.value = '';
});



// handle withdraw and minus main balance-----------------------------------
const withdrawBtn = document.getElementById('withdraw-btn');
const withDrawInput = document.getElementById('withdraw-input');
const withDrawTotal = document.getElementById('withdraw-total');

withdrawBtn.addEventListener('click', function(){
    const withdrawAmount = parseFloat(withDrawInput.value);
    const previousAmount = parseFloat(withDrawTotal.innerText);
    const newWithdrawBalance = withdrawAmount + previousAmount;
   
    // set withdraw amount
    withDrawTotal.innerText = newWithdrawBalance;
    withDrawInput.value = '';

    // decries amount form  main balance
    const parsentMainBalance = parseFloat(mainBalance.innerText);
    const setNewMainBalance = parsentMainBalance - withdrawAmount;
    mainBalance.innerText = setNewMainBalance;
    
    
})