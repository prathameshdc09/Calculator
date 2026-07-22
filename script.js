const display = document.getElementById("display")
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const clearButton = document.querySelector(".clear")
const equalButton = document.querySelector(".equal")

console.log(display)
console.log(numberButtons)
console.log(operatorButtons)
console.log(clearButton)
console.log(equalButton)

numberButtons.forEach(function(button){
    button.addEventListener("click", function(){
        display.value = display.value + button.textContent
    });
});

operatorButtons.forEach(function(operator){
    //console.log(operator.textContent)
    operator.addEventListener("click", function(){
        const lastChar = display.value.slice(-1);
        const firstChar = display.value.slice(0)
        if(
            lastChar == "+" ||
            lastChar == "-" ||
            lastChar == "*" ||
            lastChar == "/"
        ){
            return;
        }
        if(firstChar == 0 || firstChar == ""){
            return;
        }
        display.value = display.value + operator.textContent
    });
});

equalButton.addEventListener("click", function(){
    display.value = eval(display.value)
});

clearButton.addEventListener("click", function(){
    display.value = display.value.slice(0,-1)
})