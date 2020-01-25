let temp = 65

// Logical And (&&) Operator - True if both sides are true. False otherwise.
// Logical Or (||) Operator - True if either side is true. False otherwise.

if(temp>=60 && temp<=90){
    console.log('It is pretty nice outside.')

} else if (temp<=0 || temp>=120){
   console.log("Do not go outside.") 
} else { 
    console.log("Eh. Do what you want.")

}

// else(){}  <-- this is invalid : do this else{}

let isGuestOneVegan = true
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan){
    console.log("Only offer up vegan dishes.")
} else if(isGuestOneVegan || isGuestTwoVegan){
    console.log("Make sure to offer some vegan options.")
} else {
    console.log("Offer up anything on the menu.")

}


// Challenge area

// Are both vegan? Only offer up vegan dishes.
// At least one vegan? Make sure to offer some vegan options.
// Else, Offer up anything on the menu.

