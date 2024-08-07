let a = 5
let b = 6
console.log(a)
console.log(b)
//a += 1
//console.log("a += 1 =", a)

//console.log(a--)
//console.log(a)
//Comparison operator
//console.log("a != b", a != b)
let cond1 = a < b
let cond2 = a === 5
console.log( cond1 && cond2)
let age = 13
if (age >= 15) {
    console.log("you can vote")
}
else{
    console.log("wait")
}

let num1 = 3
let num2 = 4
if (num1 % 2 === 0) {
    console.log("this is even")
}
else{
    console.log("this is odd")
}

let mode = "white"
let color
if (mode === "dark"){
    color = "blue"
} 
else if (mode === "grey"){
    color = "grey"
}
else {
    
    color = "green"
    
}

console.log(color)

mode = "dark" ? color = "pink" : color = "red"
console.log(mode)
//let nam = prompt(" hello")
//console.log(nam)
//let usernumber = prompt("enter a number please")
//if (usernumber % 5 === 0) {
//    console.log(usernumber, "is multiple of 5")
//}
//else {
 //   console.log(usernumber, "is not multiple of 5")
//}

let score = prompt ("you want to know your grade? please enter your score")
if (score >= 90 && score <= 100) {
    console.log("your grade is A")
}
else if (score >= 70 && score <= 89)
    console.log("your grade is B")
else if (score >= 60 && score <= 69)
    console.log("your grade is C")
else if (score >= 50 && score <= 59)
    console.log("your grade is D")
else if (score >= 0 && score <= 49)
    console.log("your grade is F")
else {
    console.log("invalid input")
}