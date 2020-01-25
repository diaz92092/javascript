//Undefined for variable
// for variables that are never assigned a value
let name 

name="Jen"



if (name===undefined) {
    console.log("Please provide a name.")
} else{
    console.log(name)
}

//Undefined for function arguments(function inputs)
//Function arguments(inputs) that aren't provided section 4.22
// Undefined as function return default value

let square =  function(num){
    console.log(num)
}

let result = square()
console.log(result)

// two undefined values one for console.log(num) and another for console.log(result)

//
// null as assigned value section 4.22 9:25

let age = 27

age = null

console.log(age)