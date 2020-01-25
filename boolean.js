// === is the equality operator
// !== is the not equality operator
// < is the less than operator
// <= is the less than or equal to operator
// > is the greater than operator
// >= is the greater than or equal to operator

let temp= 31
let isFreezing = temp === 31


if (isFreezing){
    console.log("It is freezing outside!")


}
console.log(isFreezing)

if(temp>=110) {
    console.log("It is way too hot outside!")

}

// challenge area

// creat age set to your age
// calculate is child - if they are seven or under
// caclulate is senior - if they are 65 or older
// print is child value
// print is senior value

let age = 29


let isChild = age <= 7
let isSenior = age >=65

console.log(isChild)
console.log(isSenior)

if( isChild) {
    console.log( "Children receive a 50% discount")
}

if( isSenior) {
    console.log( "Seniors receive a 55% discount")
}