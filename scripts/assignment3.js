function convertTemperature(temp, scale){
    let result;
    if (scale === "C"){
        result= (temp * 9/5) + 32;
    }else if (scale === "F"){
        result= (temp - 32) * 5/9;
    }else{
        result= "Invalid scale. Please use 'C' for Celcius and 'F' for Fahrenheit.";
    }

    document.getElementById("weather").innerHTML="The temperature is: " + result;
}

