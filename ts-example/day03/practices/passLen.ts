export{};
let args = process.argv.slice(2);

let password = args[0].length;
if (password >= 8){
  console.log("ok") 
}
else{
  console.log("Too-short");
}