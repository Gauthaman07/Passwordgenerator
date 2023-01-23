
const outputElement = document.querySelector('#output');
const btnCopy = document.querySelector('#btncopy');
const passwordLength = document.querySelector('#length');
const number = document.querySelector('#number');
const capital = document.querySelector('#capital');
const small = document.querySelector('#small');
const symbol = document.querySelector('#symbol')
const frm = document.querySelector('#frm')

btnCopy.addEventListener('click', async()=>{
    const pass = outputElement.value;
    if (pass) {
        await navigator.clipboard.writeText(pass);
        alert('Copied to clipboard')
    } else{
        alert('There is no password to copy')
    }
})

function generateRandomChar(min,max){
    const limit = max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*limit)+min)
}
function capitalValue(){
    return generateRandomChar(65,90);
}
function smallValue(){
    return generateRandomChar(97,122)   
}
function numberValue(){
    return generateRandomChar(48,57)
}
function symbolValue(){
    let symbols = "!#$%^&*()}{][?.,/"
    return String.fromCharCode(Math.random()*symbols.length)
}
const arrayElements = [
    {
    element:capital,
    fun:capitalValue
    },
    {
    element:small,
    fun:smallValue
    },
    {
    element:number,
    fun:numberValue
    },
    {
    element:symbol,
    fun:symbolValue
    }
]
frm.addEventListener('submit', (e)=>{
e.preventDefault();
const limit = passwordLength.value;
let generatedPassword= ""

const funArray = arrayElements.filter(({element})=>element.checked); 

for(i=0;i<limit;i++){
    const index = Math.floor(Math.random()*funArray.length)
    let letter = funArray[index].fun();
    generatedPassword+=letter;
}
outputElement.value = generatedPassword;
})


/*
function printTribRec(n){
    if (n==0 || n==1 || n==2)
    return 0;
    if (n==3)
    return 1 ;
    else 
    return printTribRec(n-1) + printTribRec(n-2) + printTribRec(n-3);

}
function printTrib(n){
    var ans = 6;
    for (var i=1; i<n;i++){
        ans = ans +printTribRec(i) + " ";
    }
    console.log(ans);
}
*/

