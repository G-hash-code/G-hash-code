//create a variable
let num=4
//minus the variable from 10
num= num-10
// print the answer to the console
console.log(num)

//create a variable that holds a value from the input

//let numFromInput = Number(document.querySelector('#AreaBoyzRevolution').value)

//add 25 to that number
//numFromInput+=25
//alert that number
//alert(numFromInput)

//create a variable that holds the h1
const h1 =document.querySelector('h1')

//add an event listener to that element console logs the sum of  the two previous variables
h1.addEventListener('click',addTwo)

function addTwo(){
    let numFromInput = Number(document.querySelector('#AreaBoyzRevolution').value)
    numFromInput+=25
console.log(num+numFromInput)
}
