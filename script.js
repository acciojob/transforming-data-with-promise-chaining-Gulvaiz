inputBtn.addEventListener("click", function() {

     const inputNumber = Number(document.getElementById("ip").value)

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
     return delay(result * 2, 1000)
})
.then((result) => {
     output.innerText = `Result: ${result}` 
     return delay(result - 3, 1000)
})
.then((result) => {
     output.innerText = `Result: ${result}` 
     return delay(result / 2, 1000)
})
.then((result) => {
     output.innerText = `Result: ${result}` 
     return delay(result + 10, 1000)
})
.then((finalResult) => {
          output.innerText = `Final Result: ${finalResult}` 
})
.catch( (e) => output.innerText = `Error: ${e}`)
})