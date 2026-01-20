export{};
let args = process.argv.slice(2);
let n = Number(args[0]);
if(n <= 0 || isNaN(n) || !Number.isInteger(n)){
    console.log("Invalid Input");
    process.exit();
}
for(let i = 1;i <= n ;i++){
    if(i % 3 === 0 && i % 7 === 0){
        console.log("FooBar");
    }else if (i % 3 === 0){
        console.log("Foo");
    }else if (i % 7 === 0){
        console.log("Bar");
    }else{
        console.log(String(i));
    }
}