export{};
import {avg} from './testExport';
import * as _ from 'lodash';
import Chance  = require('chance');
const chance = new Chance();
// console.log(avg([2,3,4]));
// ex01
// const sumScore = (number:number[]) =>{
//   console.log(_.sum(number));
// }
// sumScore([10,20,30]);

//ex02

// const rmdup = _.uniq([1,2,3,4,4,4]);
// console.log(rmdup);

//ex03

// const groupUsers  = _.chunk([1,2,3,4,5,6],2);
// console.log(groupUsers);

//ex07
const mockUsergen = () =>{
  let name = chance.name();
  let age = chance.age();
  let email = chance.email();

  return{
    name: name,
    age: age,
    email:email,
  }
}
for(let i = 0;i<5;i++){
  console.log(mockUsergen());
}