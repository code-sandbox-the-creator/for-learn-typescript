export{};
let args = process.argv.slice(2);
let n = args[0];
let a = Number(args[1]);
let b = Number(args[2]);
let raw_a = args[1];
let raw_b = args[2];
if (Number.isInteger(Number(n))){
    console.log("Invalid operator");
    process.exit(); 
}
if(isNaN(a) || isNaN(b) || raw_a == ""  || raw_b == ""){
    console.log("Invalid input");
    process.exit();
}
n = n.toLowerCase();
switch(n){
    case "add":console.log(String(a + b)) ;break;
    case "sub":console.log(String(a - b)) ;break;
    case "mul":console.log(String(a * b)) ;break;
    case "div":
        if(b === 0){    
            console.log("Invalid input");
            process.exit();
        }
        console.log(String(a / b)) ;break;
    default: console.log("Invalid operator");break;
}