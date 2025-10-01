// add money btn work 
const valid_pin=1234;
document.getElementById("AddMoneyBtn").addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Add Money button clicked");;
    const bank=document.getElementById("bank").value;
    const bankAccNum=document.getElementById("Bank-acc-num").value;
    const amount=parseInt(document.getElementById("amount-num").value);
    const pin= parseInt(document.getElementById("pin-num").value);
   
    console.log("Bank:", bank);
    console.log("Bank Account Number:", bankAccNum);
    console.log("Amount:", amount);
    console.log("PIN:", pin);


    if (bankAccNum.length!==11){
        alert("Account number must be 11 digits");
        return;
    }
    if (pin!==valid_pin){
        alert("Invalid PIN");
        return;
    }
    const balance=parseInt(document.getElementById("availableBalance").innerText);
    console.log("Current Balance:", balance);
    const newBalance=balance+amount;
    document.getElementById("availableBalance").innerText=newBalance;
    console.log("New Balance:", newBalance);










});

    