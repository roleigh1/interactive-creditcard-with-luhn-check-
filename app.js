

let nameInput = document.querySelector('.grid1');
let cardName = document.querySelector('#c-name')
let numberInput = document.querySelector('.grid2');
let cardNumber = document.querySelector('#c-number') ;
let  month = document.querySelector('#mm-card')
let  year = document.querySelector('#yy-card');
let monthInput = document.querySelector('.mm');
let yearInput = document.querySelector('.yy')
let cvcInput = document.querySelector('.cvc');
let cvcCard = document.querySelector('.cvcc');
let form = document.querySelector('.form');
let afterForm  = document.querySelector('.after-form');
let btnSubmit = document.querySelector('.btn');
let spanName = document.querySelector('.span-name');
let spanMM = document.querySelector('.span-mmyy'); 
let spanYY = document.querySelector('.span-yy'); 
let spanCvc = document.querySelector('.span-cvc');
let spanNumber = document.querySelector('.span-number'); 
let displayForm = document.querySelector('.display-form'); 
let contineBtn = document.querySelector('#contine'); 


// We add in a string every 4 numbers a space. 
numberInput.addEventListener("input", () => numberInput.value = formatNumber(numberInput.value.replaceAll(" ","")));
const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
    if(index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
}, "");


// We add another string to a p element.
nameInput.addEventListener("input", function() {
    if (nameInput.value.length > 0){
    cardName.innerHTML = nameInput.value;
}
});
// We add also another sting to a p element
monthInput.addEventListener("input", function() {
    if (monthInput.value.length > 0) {
        month.innerHTML = monthInput.value;
    }
});

yearInput.addEventListener("input", function() {
    if (yearInput.value.length > 0) {
        year.innerHTML = yearInput.value;
    }
});
cvcInput.addEventListener("input", function() {
    if(cvcInput.value.length > 0) {
        cvcCard.innerHTML = cvcInput.value; 
    }
});
// We create a luhn algorithm to check if a cc number is valid.
function validateLuhn(numberInput) {

    input = numberInput.replace(/\s+/g, '');
    let reversedInput = input.split('').reverse().join('');
    let total = 0;
    for (let i = 0; i < reversedInput.length; i++) {
      let digit = parseInt(reversedInput[i]);
      if (i % 2 == 1) {
        digit *= 2;
      }
      if (digit > 9) {
        digit -= 9;
      }
      
      //We calculate the sum by the numbers
      total += digit;
    }
    document.querySelector('.span-number').innerHTML = 'Credit card is valid.'
    // We check if the sum is possible to divd by 10 
    if (total % 10 == 0) {
        document.querySelector('.span-number').style.color = 'green'
        
        return true; 
    } else {
        document.querySelector('.span-number').innerHTML = 'Credit card is invalid!'
    }
  }
// We call the valitateluhn when the max length from the input field is succided 
numberInput.addEventListener("input", function() {
     if (this.value.length === this.maxLength) {
        validateLuhn(numberInput.value.toString());
   
     }
});
// We let the card number appear on the front card.
numberInput.addEventListener("input", function() {
    if(numberInput.value.length > 0) {
        cardNumber.innerHTML = numberInput.value; 
    }
})
btnSubmit.addEventListener("click", function() {
    if (nameInput.value.length < 1) {
        spanName.innerHTML = 'Please enter your name'
    }
    if (monthInput.value.length < 1) {
        spanMM.innerHTML = 'Cant be blank';
    }
    if (yearInput.value.length < 1 ) {
        spanYY.innerHTML = 'Cant be blank'; 
    }
    if (cvcInput.value.length < 1) {
        spanCvc.innerHTML = 'Cant be blank'; 
    }
    if (numberInput.value.length <= 0) {
        spanNumber.innerHTML = 'Please enter a valid Credit card!' 
    }
    if (nameInput.value.length > 2 && document.querySelector('.span-number').innerHTML == 'Credit card is valid.' && monthInput.value.length >= 2 && monthInput.value.length >= 2 && yearInput.value.length >= 2 && cvcInput.value.length >= 3) {
        displayForm.style.display = "none"; 
        afterForm.style.visibility =  "visible"; 
    }
});
contineBtn.addEventListener("click", function() {
    afterForm.style.visibility = "hidden";
    displayForm.style.display = "block";
});
