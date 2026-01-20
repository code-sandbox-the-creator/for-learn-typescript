

export{};
let args = process.argv.slice(2);

function num_or_str(n:(number | string)):void{
  if (typeof n === "number"){
    console.log(n**n);
  }else if(typeof n === "string"){
    console.log(n.toUpperCase());
  }
}
num_or_str(args[0]);