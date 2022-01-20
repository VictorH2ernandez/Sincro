//codigo sicrono

let variableSincrona;
variableSincrona= 10 *3;
console.log(variableSincrona);

//codigo ascincrono
let variableAsincrona;
setTimeout(()=>{
    variableAsincrona= 10*2;
    console.log(variableAsincrona)
}, 2000)

console.log(variableAsincrona)