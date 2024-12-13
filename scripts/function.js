console.log("function.js")

//creating the funtion
function greet(name){
    return "Hello world from a Function and hello "
+ name;
}

console.log(greet("Nick"))

//Anonumous funtions
let greetTwo = function(name){
    return "Hello world from an anonymous function! and Hello " + name;
}

console.log(greetTwo("Nick"));

//create a function with multiple parameters
function greetThree(name,place){
    return "Hello " + name + " from " + place;
}

console.log(greetThree("Nick", "school"));

function multipleThree(num){
    return num * 3;
}

console.log(multipleThree(4)); //12
console.log(multipleThree(3)); 9

//challenge

function combineNames(firstName, secondName){
    return firstName + " " + secondName
}
console.log(combineNames("Luis", "Alan"));

function sum(sum1, sum2){
    return sum1 + sum2;
}


//prompts
//let productName = prompt("Enter product name:");
//let productPrice = Number(prompt("Enter the price:"));
console.log(productName);
console.log(productPrice);
console.log(sum(2,productPrice));

function addCart(price){
    let total=0;
    total=total+price;
    return total;
}

total = addCart(productPrice);
console.log("The total is: " + total)



function calculateTaxes(total){
    return 1.11 * total;
}
 
console.log("The total is: "+ calculateTaxes(total));
document.write ("<p>" + productName + " " + calculateTaxes(total).toFixed(2) +"</p>")

//mini challenge
//let num1 = Number(prompt("Enter a number:"));
//let num2 = Number(prompt("Enter a second number"));
let result = 0;

function sub(num1, num2){
    result= num1 - num2;
    console.log("The result of subraction of " + num1 + " and " + num2 + " is " + result);
    document.write("<p>The result of subraction of " + num1 + " and " + num2 + " is " + result);
}

//linking a function to a button
function addProduct(){
    let prodName = prompt("Enter the product name: ");
    document.getElementById("list").innerHTML+=`<p>${prodName}</p>`;
}



