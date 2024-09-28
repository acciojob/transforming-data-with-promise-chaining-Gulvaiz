const inputBtn = document.getElementById("btn")
const inputNumber = document.getElementById("ip").value
const output = document.getElementById("output")

inputBtn.addEventListener("click", function() {

function delay(value,time){
       return new Promise((resolve) => {
             setTimeout(() => {
                   resolve (value)
             },time)
       })
}

delay(inputNumber, 2000)
.then((result) => {
     output.innerText = `Result: ${result}` 
     return delay(result * 2,1000)
})
.then((result) => {
     output.innerText = `Result: ${result}` 
     return delay(result - 3,1000)
})
.then((result) => {
     output.innerText = `Result: ${result}` 
     return delay(result / 2,1000)
})
.then((result) => {
     output.innerText = `Result: ${result}` 
     return delay(result + 10,1000)
})
.then((finalResult) => {
          output.innerText = `Final Result: ${result}` 
})
.catch( (e) => output.innerText = `Error: ${e}`)
})