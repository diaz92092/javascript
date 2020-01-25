// function - input(argument), code, output (return value)
/*  let greetUser = function(){
    console.log("Welcome user!")
} this creates the function*/

// greetUser()  this calls the function

let greetUser = function(){
    console.log("Welcome user!")
}

greetUser()

let square = function (num) {
    let result = num * num
    return result

}
// return can only be used in functions


let value = square(3) 
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge area

let convertion = function(fahrenheit) {
    let celsius = ( fahrenheit - 32) * (5/9)
    return celsius
}

let tempOne = convertion(32)
let tempTwo= convertion(68)

console.log(tempOne
    )
console.log(tempTwo)



/* convertFahrenheitToCelsius

Call a couple of times (32->0) (68->20)
Print the converted values */