let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
   
   let area = length * width;
   document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
   } 
  
function calculateTotal() {
    amount1 = parseFloat(document.getElementById('amount-1').value);
    amount2 = parseFloat(document.getElementById('amount-2').value);
    amount3 = parseFloat(document.getElementById('amount-3').value);

    let ttlAmount = amount1 + amount2 + amount3;
   document.getElementById('totalAmount').innerText = `The total amount of grocery is: ${ttlAmount}`;
   } 