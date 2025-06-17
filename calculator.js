var input1 = document.getElementById("First");
var input2 = document.getElementById("Second");
var input3 = document.getElementById("Third");
function add(){
    const a = Number(input1.value);
    const b = Number(input2.value);
const ans = a + b;
document.getElementById('output').innerHTML = "Addition is " + ans;
}
function subt(){
    const a = Number(input1.value);
    const b = Number(input2.value);
const ans = a - b;
document.getElementById('output').innerHTML = "Subtraction is " + ans;
}
function mult(){
    const a = Number(input1.value);
    const b = Number(input2.value);
const ans = a * b;
document.getElementById('output').innerHTML = "Multiplication is " + ans;
}
function divi(){
const a = Number(input1.value);
const b = Number(input2.value);
const ans = a / b;
document.getElementById('output').innerHTML = "Division is " + ans;   
}
function modu(){
const a = Number(input1.value);
const b = Number(input2.value);
const ans = a % b;
document.getElementById('output').innerHTML = "Modulus is " + ans;      
}
function xor(){
const a = Number(input1.value);
const b = Number(input2.value);
const ans = a ^ b;
document.getElementById('output').innerHTML = "XOR is " + ans;       
} 
function decimaltobinary(){
    let a = Number(input3.value);
    let ans= "";
    if(a<0){
        document.getElementById('output').innerHTML = "Enter Valid Decimal Number";
        return;
    }
    if(a==0){
         ans = 0;
    }
    while(a){
        let n = a % 2;
         ans = `${n}${ans}`
        a = Math.floor(a/2);
    }
document.getElementById('output').innerHTML = "Binary  is " + ans; 
}
function binarytodecimal() {
    let binaryStr = input3.value.trim();
    for (let i = 0; i < binaryStr.length; i++) {
        if (binaryStr[i] !== '0' && binaryStr[i] !== '1') {
            document.getElementById('output').innerHTML = "Please enter a valid binary number (only 0s and 1s).";
            return;
        }
    }
    let a = Number(binaryStr);
    let count = 0;
    let decimal = 0;
    while (a) {
        let n = a % 10;
        decimal = (2 ** count * n) + decimal;
        a = Math.floor(a / 10);
        count++;
    }
    document.getElementById('output').innerHTML = "Decimal is " + decimal;
}
function switches(){
    let temp = input2.value;
    input2.value = input1.value;
    input1.value = temp;
}
function octaltodecimal(){
    let a = Number(input3.value);
    let count = 0;
    let decimal = 0;
    if(a<0){
        document.getElementById('output').innerHTML = "Enter Valid Decimal Number";
        return;
    }else{
    while(a){
        n = a % 10;
        decimal = (8**count * n) + decimal;
        count++;
        a = Math.floor(a/10);
    }
    document.getElementById('output').innerHTML = "Decimal is " + decimal;
}
}
function decimaltooctal(){
    let a = Number(input3.value);
    let ans = "";
    if(a<0){
     document.getElementById('output').innerHTML = "Enter Valid Decimal Number";
        return;
    }
    if(a==0){
        ans = "0";
    }
    while(a){
        let n = a % 8;
        ans = `${n}${ans}`;
        a = Math.floor(a/8);
    }
    document.getElementById('output').innerHTML = "Octal  is " + ans; 
}

function binarytooctal(){
   let binaryStr = input3.value.trim();
    for (let i = 0; i < binaryStr.length; i++) {
        if (binaryStr[i] !== '0' && binaryStr[i] !== '1') {
            document.getElementById('output').innerHTML = "Please enter a valid binary number (only 0s and 1s).";
            return;
        }
    }
    let a = Number(binaryStr);
    let count = 0;
    let decimal = 0;
    while (a) {
        let n = a % 10;
        decimal = (2 ** count * n) + decimal;
        a = Math.floor(a / 10);
        count++;
    }
    let ans = "";
    if(decimal==0){
        ans = "0";
    }
    while(decimal){
        let n = decimal % 8;
        ans = `${n}${ans}`;
        decimal = Math.floor(decimal/8);
    }
        document.getElementById('output').innerHTML = "Octal is " + ans;
}

function octaltobinary(){
     let a = Number(input3.value);
    let count = 0;
    let decimal = 0;
    if(a<0){
        document.getElementById('output').innerHTML = "Enter Valid Decimal Number";
        return;
    }else{
    while(a){
        n = a % 10;
        decimal = (8**count * n) + decimal;
        count++;
        a = Math.floor(a/10);
    }
}
      let ans= "";
    if(decimal==0){
         decimal = 0;
    }
    while(decimal){
        let n = decimal % 2;
         ans = `${n}${ans}`
        decimal = Math.floor(decimal/2);
    }
document.getElementById('output').innerHTML = "Binary  is " + ans; 
}
