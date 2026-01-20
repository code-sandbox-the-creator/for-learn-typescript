import { error } from "console";
import { reject, result } from "lodash";
import { resolve } from "path";

export{};
//ex01
// const validateUsername = (name:string) =>{
//   if(name === ""|| name === undefined){
//     const err = new Error("Emtyname");
//     err.name = "Emtyname";
//     throw err;
//   }
// }
// const username = (name:string)=> {
//   try{
//     validateUsername(name);
//   }
//   catch(err:any){
//     if(err.name === "Emtyname"){
//       console.log("your name is emty");
//       process.exit();
//     }
//   }
//   console.log(`hello ${name}`);
// }
// username('asdsa');

//ex02
// const parseAge =(num_str:string) =>{
//   if(isNaN(Number(num_str)) || num_str === "" ){
//     const err = new Error("NotNum")
//     err.name = "Notnum"

//     throw err;
//   }
// }
// const strTonum = (value:string) =>{
//   try{
//     parseAge(value);
//   }catch(err:any){
//     if(err.name = "Notnum"){
//       console.log("your input not a number");
//       process.exit();
//     }
//   }
//   console.log(Number(value));
//   console.log(typeof(Number(value)));

// }
// strTonum("sada")

//ex03
// const login = (username:string,password:any) =>{
//   let counter = 0
//   let error:Error = new Error("tmp error");
//   if(username !== "john"){
//     let err1 = new Error("inval_username");
//     err1.name = "inval_user";
//     counter += 1;
//     error = err1;

//   }
//   if(password !== 1234){
//     let err2 = new Error("inval_password");
//     err2.name = "inval_pass";

//     counter += 1;
//     error = err2;

//   }
//   if(counter === 2){
//     const err = new Error("inval_user_and_pass");
//     err.name = "inval_user_pass";
//     throw err;
//   }else if(counter === 0){
//     return;
//   }else{
//     throw error;
//   }
// }
// const login_form = (username:string,password:any) =>{
//   try{
//     login(username,password);
//   }catch(err:any){
//     if(err.name === "inval_user_pass"){
//       console.log("Invalid Username and Password");
//       process.exit();
//     }else if(err.name === "inval_user"){
//       console.log("Invalid username");
//       process.exit();
//     }else if(err.name === "inval_pass"){
//       console.log("Invalid password");
//       process.exit();
//     }
//   }
//   console.log(`Welcome ${username}`);
// }


// login_form("john",1234);

//ex06,07
// function wait(cb: () => void){
//   setTimeout(cb,5000);
// }
// console.log("Start");
// console.log("End")
// wait(() => {
//   console.log("Middle");
// });

//ex08,9,10,11
function wait():Promise<any>{
    return new Promise((resolve,reject) =>{
      setTimeout(()=>{
        const ran = Math.round(Math.random()*10)
        if(ran >= 5){
          resolve(ran);
        }else{
          reject(ran);
        }
      },2000);
    });
}

async function main() {
  console.log("start");
  try{
    const result = await wait();
    console.log(`your ran num is ${result}`);
  }
  catch(err){
    console.log("the randnum below 5");
    process.exit();
  }
  
}
main()

//ex12
// const args = process.argv.slice(2);
// let input = args[0];
// function readInput(stdin:string):Promise<string>{
//   return new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//       resolve(stdin);
//     },2000);
//   });
// }

// async function output(input:string){
//   try{
//     const result = await readInput(input);
//     console.log(`You type: ${result}`);
//   }catch(err){
//     console.log("tou type not a charecter")
//   }
// }
// output(input);

// ex14
import https from "https";
function request(url:string):Promise<any>{
  return new Promise((resolve,reject)=>{
    https.get(url,res =>{
      let data = "";
      res.on("data",c =>data +=c);
      res.on("end",()=> resolve(data));
    }).on("error",reject);
  });
}

async function log(url:string) {
  try{
    const data = await request(url);
    console.log(data);
  }catch(err){
    console.log("fail to load data");
  }
}
log("https://jsonplaceholder.typicode.com/posts/1");