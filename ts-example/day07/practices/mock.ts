export{};
import * as fs from "fs";
import * as path from "path";
const filePath = path.join(__dirname, "data.json");
const jsondata = fs.readFileSync(filePath,"utf-8");
const students = JSON.parse(jsondata);
console.log(students);



