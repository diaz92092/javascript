// Javascript uses lexical scoping also known as (static scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside of a code block

/* In a scope you can access variables defined in that scope, or in any 
parent/ancestor scope */

// Global Scope (varOne)
    // Local Scope (varTwo)
        //Local Scope (varfour)
    //Local Scope (varThree)
let varOne = "varOne"

if(true){
    console.log(varOne)
    let varTwo = "varTwo"
    console.log(varTwo)
    if(true){ 
        let varFour = "varFour"

    }


}

console.log(varTwo)