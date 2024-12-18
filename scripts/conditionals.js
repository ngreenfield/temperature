console.log("if-statement");

//---if statement ---
//if(condition){
    //code to be executed if the condition is true
//}

if(3<=5){
    console.log("I am inside the if statement");
}

let student1 = 55;
let student2 = 55;

if(student1==student2){
    console.log("Both are the same");
}

// ---- if-else statement ---
//if(condition){
    //code to be executed if the condition is true
//}
//else{
    //code the be executed if the condition is false
//}

let isTrue=true;

if(isTrue){
    console.log("Yes");
}
else{
    console.log("No");
}

let age = 50;

if (age>=21){
    console.log("You are an adult");
}else{
    console.log("You are underage");
}

//--- if-else if-else statement---
//if(condition){
   // code to be executed if condition is true
//}
//else if(condition2){
    //code to be executedif condition2 is true
//}
//else{
    //ode to be executed if conditions are false
//}

age = 29;

if(age<13){
    console.log("Child");
}
else if(age<21){
    console.log("Teenager");
}
else if(age<64){
    console.log("Adult");
}
else{
    console.log("Senior");
}

function ticketCalculator(){
    let age = prompt("Enter your age: ");
    if(age<12){
        console.log("Your ticker price is: $5");
    }
    else if(age<=18){
        console.log("Your ticker price is: $8");
    }
    else{
        console.log("Your ticker price is: $10");
    }
}

function weatherOutfit(){
    let temp = prompt("Enter the temperature: ");
    document.getElementById("weather").classList.remove("cold", "hot");

    if(temp<15){
        outfit="jacket"
        console.log("It's cold, wear a jacket.");
        document.getElementById("weather").classList.add("cold")
    }
    else if(temp<=25){
        outfit="sweater"
        console.log("It's a bit chilly, wear a sweater.");
    }
    else{
        outfit="t-shirt"
        console.log("It's warm, wear a t-shirt.");
        document.getElementById("weather").classList.add("hot")
       }
    document.getElementById("weather").innerHTML="You should wear : " + outfit;
}