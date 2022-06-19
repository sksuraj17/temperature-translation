const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for (let i =0;i< inputs.length; i++){
    let input = inputs[i];

        input.addEventListener("input", function(e){
            let value = e.target.value;
            console.log(e.target.name + ":" + value);
        });

}