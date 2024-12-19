function convertTemperatureRange(){
    let startValue = prompt("Enter the starting temperature:");
    let endValue = prompt("Enter the end temperature:");
    let scale = prompt("Enter C for Celsius or F for Fahrenheit");

    let result = 0;
    let resultList = ``;

    if (scale = "C") {
        for (let i = startValue; i <= endValue; i++){
            result = (i * 9 / 5) + 32; 
            resultList += `<li>${i}°C = ${result}°F</li>`;
        }
    }else if (scale = "F"){
        for (let i = startValue; i <= endValue; i++){
            result = (i - 32) * 5 / 9;
            resultList += `<li>${i}°F = ${result}°C</li>`;
        }
    }else{
        resultList = "Invalid scale. Please use 'C' for Celsius and 'F' for Fahrenheit.";
    }

    document.getElementById("weather").innerHTML = resultList;
}
