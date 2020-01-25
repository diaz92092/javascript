// Multiple arguments

let add = function(a, b, c){
    return a + b + c

}

let result = add(10, 1, 5)
console.log(result)

// This is called call signature = >'let result = add(10, 1)'

// Default arguments

let getScoreText = function (name = "Anonymous", score = 0) {
    return "Name: " + name + " -Score: " + score
}

let scoreText = getScoreText(undefined,99)

console.log(scoreText)

// Challenge area
// Total tipPercent .2

let getTotalText = function (subTotal = 0, tip = .2){
    
    return "Subtotal: " + subTotal  + '$ ' + " Tip Percent: " + (tip * 100) + "%" +  " Tip " + (subTotal * tip) + "$ " + "  Total: " + (subTotal + (subTotal * tip)) + "$"
}

let totalText = getTotalText(552.50, .25)

console.log(totalText)

// Very Useful ^

