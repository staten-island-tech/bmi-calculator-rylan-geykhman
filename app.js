const num1 = Number(prompt("Enter your weight, in kilograms."));
const num2 = Number(prompt("Enter your height, in meters."));

function bmi_calc(x, y){
    z = y ** 2;
    bmi = x / y;
}
const bmi = bmi_calc(num1, num2);
let result;
if (bmi < 18.5){
    result = "You are underweight.";
} else if (bmi > 24.9){
    console.log("You are overweight.");
} else {
    console.log("You are healthy weight.");
}