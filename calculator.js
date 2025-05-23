const input1 = document.getElementById("First");
const input2 = document.getElementById("Second");
const input3 = document.getElementById("Third");
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
function binary(){
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
function decimal(){
    let a = Number(input3.value);
    let count = 0;
    let decimal = 0;
    while(a){
        n = a % 10;
        decimal = (2**count * n) + decimal;
        a = Math.floor(a / 10);
        count++;
    }
    document.getElementById('output').innerHTML = "Decimal is " + decimal;
}

//optional 
// function binaryToDecimal() {
//     const input = document.getElementById("binaryInput").value.trim();

//     // Simple validation using regex
//     if (!/^[01]+$/.test(input)) {
//         document.getElementById("output").innerHTML = "❌ Invalid input: Only 0 and 1 allowed.";
//         return;
//     }

//     // Use parseInt with radix 2 to convert binary to decimal
//     const decimal = parseInt(input, 2);
//     document.getElementById("output").innerHTML = "✅ Decimal is " + decimal;
// }
