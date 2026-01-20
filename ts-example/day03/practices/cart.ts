export{};
const args:string[]  = process.argv.slice(2);
let total = 0;
for(let i = 0 ;i<args.length;i++){
  if(args[i] === "discount"){
    continue;
  }
  if(args[i] === "free"){
    console.log("Item: 0 (free)");
    continue;
  }
  if(!isNaN(Number(args[i])) && args[i-1] !== "discount"){
    console.log(`Item: ${args[i]}`);
    total += Number(args[i]);
  }else{
    let discount = Number(args[i]) - Number(args[i])*(10/100);
    console.log(`Item: ${discount} (after discount)`);
    total += Number(discount);
  }
}
console.log(`Total: ${total}`);