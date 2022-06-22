var firstNumber = parseFloat(prompt('Enter first number: '));
var secondNumber = parseFloat(prompt('Enter second number: '));
var operation = prompt('Enter the operation you want to do; +, -, *, / : ');
if (operation == '+') {
    alert(firstNumber + secondNumber)
}
else if (operation == '-') {
    alert(firstNumber - secondNumber)
}
else if (operation == '*') {
    alert(firstNumber * secondNumber)
}
else if (operation == '/') {
    alert(firstNumber / secondNumber)
}
else {
    alert('Enter a valid operation')
}

