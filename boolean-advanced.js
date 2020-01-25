let isAccountLocked = false
let userRole= "admim"

/*if (isAccountLocked) {
    console.log( "Account is locked.")
} else {
    console.log("Welcome!")
}

/* if (true) {

} esle if (true) {

} else {

} 
*/

if (isAccountLocked) {
    console.log( "Account is locked.")
} else if (userRole==="admin") {
    console.log("Welcome Admin!")
} else {
    console.log("Welcome!")
}

// challenge area

let temp = 31

if(temp <= 32){ 
    console.log('It is freezing outside!')

} else if ( temp >=110) {
    console.log('It is hot oustide!')
} else {
    console.log('Go for it. It is pretty nice.')
}

// It is freezing outside!
// It is hot oustide!
// Go for it. It is pretty nice.