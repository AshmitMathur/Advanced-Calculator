var input1 = document.getElementById("First");
var input2 = document.getElementById("Second");
var input3 = document.getElementById("Third");
var input4 = document.getElementById("fourth");
let input5 = document.getElementById("fifth");
var result,res,tres,fres;
function clearinput(){
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
    document.getElementById('output').innerHTML = "";
    console.clear();
    
}
function useeresult(){
    if(fres != undefined)
        input5.value = fres;
}
function useresult(){
    input1.value = result;
    input2.value = "";
}
function usresult(){
    if(res != undefined)
    input3.value = res;
}
function ustresult(){
    if(tres != undefined)
    input4.value = tres;
}
function add(){
    const a = Number(input1.value);
    const b = Number(input2.value);
const ans = a + b;
console.log(` ${a} + ${b} = ${ans}`)
document.getElementById('output').innerHTML = "Addition is " + ans;
result = ans;
}
function subt(){
    const a = Number(input1.value);
    const b = Number(input2.value);
    const ans = a - b;
    console.log(` ${a} - ${b} = ${ans}`)
    document.getElementById('output').innerHTML = "Subtraction is " + ans;
    result = ans;
}
function mult(){
    const a = Number(input1.value);
    const b = Number(input2.value);
    const ans = a * b;
    console.log(` ${a} * ${b} = ${ans}`)
    document.getElementById('output').innerHTML = "Multiplication is " + ans;
    result = ans;
}
function divi(){
    const a = Number(input1.value);
    const b = Number(input2.value);
    const ans = a / b;
    console.log(` ${a} / ${b} = ${ans}`)
    document.getElementById('output').innerHTML = "Division is " + ans;   
    result = ans;
}
function modu(){
    const a = Number(input1.value);
    const b = Number(input2.value);
    const ans = a % b;
    console.log(` ${a} % ${b} = ${ans}`)
    document.getElementById('output').innerHTML = "Modulus is " + ans;      
    result = ans;
}
function xor(){
    const a = Number(input1.value);
    const b = Number(input2.value);
    const ans = a ^ b;
    console.log(` ${a} ^ ${b} = ${ans}`)
    document.getElementById('output').innerHTML = "XOR is " + ans;       
    result = ans;
} 
function decimaltobinary(){
    const b = input3.value.trim();
    for(let i=0;i<b.length;i++){
        if(b[i] >= 'A' && b[i] <= 'Z' || b[i] >='a' && b[i] <='z'){
                document.getElementById('output').innerHTML = "Enter Valid Decimal Number";
            return;
        }
    }
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
    console.log(`${input3.value} --> ${ans}`)
    document.getElementById('output').innerHTML = "Binary  is " + ans; 
    res = ans;
}
function binarytodecimal() {
    let binaryStr = input3.value.trim();
    for (let i = 0; i < binaryStr.length; i++) {
        if (binaryStr[i] !== '0' && binaryStr[i] !== '1' || binaryStr[i] >= 'A' && binaryStr[i] <= 'Z' || binaryStr[i] >= 'a' && binaryStr[i] <= 'z') {
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
    console.log(`${input3.value} --> ${decimal}`);
    document.getElementById('output').innerHTML = "Decimal is " + decimal;
    res = decimal;
}
function switches(){
    let temp = input2.value;
    input2.value = input1.value;
    input1.value = temp;
    console.log(`${input2.value} <--> ${input1.value}`);
}
function octaltodecimal(){
    let bin = input3.value.trim();
    for(let i=0 ;i<bin.length; i++){
        if(bin[i] === '9' || bin[i] === '8' || bin[i] >= 'A' && bin[i] <= 'Z' || bin[i] >= 'a' && bin[i] <= 'z'){
            document.getElementById('output').innerHTML = "Please enter a valid octal number (only 0-7).";
            return;
        }
    }
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
         console.log(`${input3.value} --> ${decimal}`);
        document.getElementById('output').innerHTML = "Decimal is " + decimal;
        res = decimal;
    }
}
function decimaltooctal(){
    let decimalstr = input3.value.trim();
    for(let i=0 ; i < decimalstr.length ; i++){
        if (decimalstr[i] >= 'A' && decimalstr[i] <= 'Z' || decimalstr[i] >= 'a' && decimalstr[i] <= 'z'){
        document.getElementById('output').innerHTML = "Enter Valid Decimal Number";
        return ;
        }
    }
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
     console.log(`${input3.value} --> ${ans}`);
    document.getElementById('output').innerHTML = "Octal  is " + ans; 
    res = ans;
}
function binarytooctal(){
    let binaryStr = input3.value.trim();
    for (let i = 0; i < binaryStr.length; i++) {
        if (binaryStr[i] !== '0' && binaryStr[i] !== '1' || binaryStr[i] >= 'A' && binaryStr[i] <= 'Z' || binaryStr[i] >= 'a' && binaryStr[i] <='z' ) {
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
     console.log(`${input3.value} --> ${ans}`);
    document.getElementById('output').innerHTML = "Octal is " + ans;
    res = ans;
}
function octaltobinary(){
    let bin = input3.value.trim();
    for (let i = 0; i < bin.length; i++) {
        if(bin[i] === '8' || bin[i] === '9' || bin[i] >= 'A' && bin[i] <= 'Z' || bin[i] >= 'a' && bin[i] <= 'z'){
            document.getElementById('output').innerHTML = "Please enter a valid octal number (only 0-7).";
            return;
        }
    }
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
     console.log(`${input3.value} --> ${ans}`);
    document.getElementById('output').innerHTML = "Binary  is " + ans; 
    res = ans;
}
function hexatodecimal(){
    let s = input3.value.trim();
    let count = 0;
    let ans = 0;
    let flag = false;
    s = s.toUpperCase(); 
    for (let i = s.length - 1; i >= 0; i--) {
        const ch = s[i];
        if (ch === 'A') {
            ans += 10 * Math.pow(16, count++);
        } else if (ch === 'B') {
            ans += 11 * Math.pow(16, count++);
        } else if (ch === 'C') {
            ans += 12 * Math.pow(16, count++);
        } else if (ch === 'D') {
            ans += 13 * Math.pow(16, count++);
        } else if (ch === 'E') {
            ans += 14 * Math.pow(16, count++);
        } else if (ch === 'F') {
            ans += 15 * Math.pow(16, count++);
        } else if (ch >= 'G' && ch <= 'Z') {
            document.getElementById('output').innerHTML = `Invalid Hexadecimal Character at position ${i + 1}`;
            return;
        } else if (ch >= '0' && ch <= '9') {
            ans += (ch.charCodeAt(0) - '0'.charCodeAt(0)) * Math.pow(16, count++);
        }
    }
     console.log(`${input3.value} --> ${ans}`);
        document.getElementById('output').innerHTML = "Decimal  is " + ans; 
        res = ans;
}
function decimaltohexa(){
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
        let n = a % 16;
        if(n==10){
            ans = `A${ans}`;
        }
        else if(n==11){
        ans = `B${ans}`;
        }
        else if(n==12){
            ans = `C${ans}`;
        }
        else if(n==13){
            ans = `D${ans}`;
        }
        else if(n==14){
            ans = `E${ans}`;
        }
        else if(n==15){
            ans = `F${ans}`;
        }
        else{
        ans = `${n}${ans}`
        }
        a = Math.floor(a/16);
    }
     console.log(`${input3.value} --> ${ans}`);
    document.getElementById('output').innerHTML = "Hexadecimal  is " + ans; 
    res = ans;
}
function hexatobinary(){
     let s = input3.value.trim();
    let count = 0;
    let ans = 0;
    let flag = false;
    s = s.toUpperCase(); 
    for (let i = s.length - 1; i >= 0; i--) {
        const ch = s[i];
        if (ch === 'A') {
            ans += 10 * Math.pow(16, count++);
        } else if (ch === 'B') {
            ans += 11 * Math.pow(16, count++);
        } else if (ch === 'C') {
            ans += 12 * Math.pow(16, count++);
        } else if (ch === 'D') {
            ans += 13 * Math.pow(16, count++);
        } else if (ch === 'E') {
            ans += 14 * Math.pow(16, count++);
        } else if (ch === 'F') {
            ans += 15 * Math.pow(16, count++);
        } else if (ch >= 'G' && ch <= 'Z') {
            document.getElementById('output').innerHTML = `Invalid Hexadecimal Character at position ${i + 1}`;
            return;
        } else if (ch >= '0' && ch <= '9') {
            ans += (ch.charCodeAt(0) - '0'.charCodeAt(0)) * Math.pow(16, count++);
        }
    }
    let a = ans;
    let r = "";
    if(a<0){
        document.getElementById('output').innerHTML = "Enter Valid Decimal Number";
        return;
    }
    if(a==0){
        r = 0;
    }
    while(a){
        let n = a % 2;
        r = `${n}${r}`
        a = Math.floor(a/2);
    }
     console.log(`${input3.value} --> ${r}`);
    document.getElementById('output').innerHTML = "Binary  is " + r; 
    res = r;
}
function bintohex(){
    let binaryStr = input3.value.trim();
    for (let i = 0; i < binaryStr.length; i++) {
        if (binaryStr[i] !== '0' && binaryStr[i] !== '1' || binaryStr[i] >= 'A' && binaryStr[i] <= 'Z' || binaryStr[i] >= 'a' && binaryStr[i] <= 'z') {
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
    a = decimal
    let ans= "";
    if(a<0){
        document.getElementById('output').innerHTML = "Enter Valid Decimal Number";
        return;
    }
    if(a==0){
        ans = 0;
    }
    while(a){
        let n = a % 16;
        if(n==10){
            ans = `A${ans}`;
        }
        else if(n==11){
        ans = `B${ans}`;
        }
        else if(n==12){
            ans = `C${ans}`;
        }
        else if(n==13){
            ans = `D${ans}`;
        }
        else if(n==14){
            ans = `E${ans}`;
        }
        else if(n==15){
            ans = `F${ans}`;
        }
        else{
        ans = `${n}${ans}`
        }
        a = Math.floor(a/16);
    }
     console.log(`${input3.value} --> ${ans}`);
    document.getElementById('output').innerHTML = "Hexadecimal  is " + ans; 
    res = ans;
}
function octaltohex(){
     let bin = input3.value.trim();
    for(let i=0 ;i<bin.length; i++){
         if(bin[i] === '9' || bin[i] === '8' || bin[i] >= 'A' && bin[i] <= 'Z' || bin[i] >= 'a' && bin[i] <= 'z'){
            document.getElementById('output').innerHTML = "Please enter a valid octal number (only 0-7).";
            return;
        }
    }
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
     a = decimal;
    let ans= "";
    if(a<0){
        document.getElementById('output').innerHTML = "Enter Valid Decimal Number";
        return;
    }
    if(a==0){
        ans = 0;
    }
    while(a){
        let n = a % 16;
        if(n==10){
            ans = `A${ans}`;
        }
        else if(n==11){
        ans = `B${ans}`;
        }
        else if(n==12){
            ans = `C${ans}`;
        }
        else if(n==13){
            ans = `D${ans}`;
        }
        else if(n==14){
            ans = `E${ans}`;
        }
        else if(n==15){
            ans = `F${ans}`;
        }
        else{
        ans = `${n}${ans}`
        }
        a = Math.floor(a/16);
    }
     console.log(`${input3.value} --> ${ans}`);
    document.getElementById('output').innerHTML = "Hexadecimal  is " + ans; 
    res = ans;
}
function hextooctal(){
    let s = input3.value.trim();
    let count = 0;
    let ans = 0;
    let flag = false;
    s = s.toUpperCase(); 
    for (let i = s.length - 1; i >= 0; i--) {
        const ch = s[i];
        if (ch === 'A') {
            ans += 10 * Math.pow(16, count++);
        } else if (ch === 'B') {
            ans += 11 * Math.pow(16, count++);
        } else if (ch === 'C') {
            ans += 12 * Math.pow(16, count++);
        } else if (ch === 'D') {
            ans += 13 * Math.pow(16, count++);
        } else if (ch === 'E') {
            ans += 14 * Math.pow(16, count++);
        } else if (ch === 'F') {
            ans += 15 * Math.pow(16, count++);
        } else if (ch >= 'G' && ch <= 'Z') {
            document.getElementById('output').innerHTML = `Invalid Hexadecimal Character at position ${i + 1}`;
            return;
        } else if (ch >= '0' && ch <= '9') {
            ans += (ch.charCodeAt(0) - '0'.charCodeAt(0)) * Math.pow(16, count++);
        }
    }
    let a = ans
     ans = "";
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
    console.log(`${input3.value} --> ${ans}`);
    document.getElementById('output').innerHTML = "Octal  is " + ans; 
    res = ans;
}
function celtofar(){
    let c = Number(input4.value);
    let f = (9*c)/5 + 32;
    let t = f.toFixed(2);
    console.log(`${c}°C --> ${t}°F`);
    document.getElementById('output').innerHTML = "Temperature in Farenheit is "+ t +"°F";
    tres = t;
}
function fartocel(){
    let f = Number(input4.value);
    let c = (5*(f-32))/9;
    let t = c.toFixed(2);
    console.log(`${f}°F --> ${t}°C`);
    document.getElementById('output').innerHTML = "Temperature in Celsius is " + t + "°C";
    tres = t;
}
function celtokel(){
    let a = Number(input4.value);
    let k = a + 273.15;
    let t = k.toFixed(2);
    document.getElementById('output').innerHTML = "Temperature in Kelvin is "+ t + "k";
    console.log(`${a}°C --> ${t}K`);
    tres = t
}
function fartokel(){
    let f = Number(input4.value);
    let c = (5*(f-32))/9;
    let k = c + 273.15;
    let t = k.toFixed(2);
    document.getElementById('output').innerHTML = "Temperature in Kelvin is " + t + "k";
    console.log(`${f}°F --> ${t}K`)
    tres = t;
}
function keltocel(){
    let k = Number(input4.value);
    let c = k - 273.15;
    let t = c.toFixed(2);
    document.getElementById('output').innerHTML = "Temperature in Celsius is " + t + "°C";
    console.log(`${k}K --> ${t}°C`)
    tres = t;
}
function keltofar(){
    let k = Number(input4.value);
    let c = k - 273.15;
    let f = (9*c)/5 + 32;
    let t = f.toFixed(2);
    document.getElementById('output').innerHTML = "Temperature in Farenheit is " + t + "°F";
    console.log(`${k}K --> ${t}°F`)
    tres = t;
}
function dectobas(){
    let dec = Number(input3.value)
    let ans = ""
    while(dec){
        let n =dec % 3;
        ans = `${n}${ans}`
        dec = Math.floor(dec/3)
    }
    document.getElementById('output').innerHTML = "Base 3 Number is " + ans;
    console.log(`${input3.value} --> ${ans}`);
    res = ans;
}
function bastodec(){
      let binaryStr = input3.value.trim();
    for (let i = 0; i < binaryStr.length; i++) {
        if (binaryStr[i] !== '0' && binaryStr[i] !== '1' && binaryStr[i] !== '2' || binaryStr[i] >= 'A' && binaryStr[i] <= 'Z' || binaryStr[i] >= 'a' && binaryStr[i] <= 'z') {
            document.getElementById('output').innerHTML = "Please enter a valid Base3 number (only 0s,1s and 2s).";
            return;
        }
    }
    let a = Number(binaryStr);
    let count = 0;
    let decimal = 0;
    while (a) {
        let n = a % 10;
        decimal = (3 ** count * n) + decimal;
        a = Math.floor(a / 10);
        count++;
    }
    console.log(`${input3.value} --> ${decimal}`);
    document.getElementById('output').innerHTML = "Decimal is " + decimal;
    res = decimal;
}
function dectobasn(){
    let dec = Number(input3.value);
    let ans = ""
    let k = prompt("Enter Value of Base");
    if(!input3.value || k == null){
        alert("Necessary to Enter input as well as base")
    }
    else {
    while(dec){
        let n = dec % k;
        ans =  `${n}${ans}`;
        dec = Math.floor(dec/k);
    }
    document.getElementById('output').innerHTML = `Base ${k} Number is ` + ans;
    console.log(`${input3.value} --> ${ans}`);
    res = ans
}
}
function basntodec() {
    let input = input3.value.trim();  
    let k = Number(prompt('Enter value of Base'));
    if (!input || isNaN(k) || k < 2) {
        alert('Invalid input or base');
        return;
    }
    let decimal = 0;
    let count = 0;
    for (let i = input.length - 1; i >= 0; i--) {
        let digit = Number(input[i]);
        if (isNaN(digit) || digit >= k) {
            alert(`Invalid digit '${input[i]}' for base ${k}`);
            return;
        }

        decimal += digit * (k ** count);
        count++;
    }

    console.log(`${input} (base ${k}) --> ${decimal} (decimal)`);
    document.getElementById('output').innerHTML = "Decimal is " + decimal;
    res = decimal; // assuming you need this somewhere globally
}
function miltokil(){
    let mil = input5.value;
    let kil = Number((mil/1.609344));
    document.getElementById('output').innerHTML = "Kilometer is " + kil + " km";
    fres = kil;
}
function kiltomil(){
    let kil = input5.value;
    let mil = Number(kil*1.609344);
    document.getElementById('output').innerHTML = "Mile is " + mil + " mile";
    fres = mil;
}
