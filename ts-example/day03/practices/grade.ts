export{};
let args = process.argv.slice(2);

let grade = Number(args[0]);
if (Number.isNaN(grade)){
console.log("Invalid Input");
}else{
if (grade === 80 || grade > 75){
  console.log("A");
}
else if(grade === 75 || grade > 70){
  console.log("B");
}
else if(grade === 70 || grade > 65){
  console.log("C");
}
else if(grade === 65 || grade > 60){
  console.log("D");
}
else {
  console.log("F");
}
}