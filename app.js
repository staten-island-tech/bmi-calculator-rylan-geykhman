const num1 = Number(prompt("Enter your weight, in kilograms."));
const num2 = Number(prompt("Enter your height, in meters."));

function bmi_calc(x, y){
    return (x/y ** 2);
}

function bmi_log(){
    const bmi = bmi_calc(num1,num2);
    console.log(bmi);
    if (bmi < 18.5){
        console.log("You are underweight.");
    } else if (bmi > 24.9){
        console.log("You are overweight.");
    } else {
        console.log("You are healthy weight.");
    }
}

bmi_log();