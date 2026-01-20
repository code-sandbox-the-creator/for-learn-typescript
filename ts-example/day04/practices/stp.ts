import strict = require("assert/strict");
import { types } from "util";

export{};
type Address = {
  country:string;
  province:string;
}
type Point = {
  subject :string;
  point:number;
}
type Student ={
  id:number;
  name :string;
  age:number;
  sex:"male"|"female";
  address:Address;
  points:Point[];
}
type Students = Student[];
const studentsJson: Students = [
  {
    "id": 1,
    "name": "Alice",
    "age": 18,
    "sex": "female",
    "address": {
      "country": "Thailand",
      "province": "Bangkok"
    },
    "points": [
      { "subject": "Math", "point": 85 },
      { "subject": "Programming", "point": 92 },
      { "subject": "English", "point": 78 }
    ]
  },
  {
    "id": 2,
    "name": "Bob",
    "age": 19,
    "sex": "male",
    "address": {
      "country": "Thailand",
      "province": "Chiang Mai"
    },
    "points": [
      { "subject": "Math", "point": 70 },
      { "subject": "Programming", "point": 88 },
      { "subject": "English", "point": 75 }
    ]
  },
  {
    "id": 3,
    "name": "Charlie",
    "age": 18,
    "sex": "male",
    "address": {
      "country": "Thailand",
      "province": "Khon Kaen"
    },
    "points": [
      { "subject": "Math", "point": 60 },
      { "subject": "Programming", "point": 65 },
      { "subject": "English", "point": 68 }
    ]
  },
  {
    "id": 4,
    "name": "Diana",
    "age": 20,
    "sex": "female",
    "address": {
      "country": "Thailand",
      "province": "Phuket"
    },
    "points": [
      { "subject": "Math", "point": 90 },
      { "subject": "Programming", "point": 95 },
      { "subject": "English", "point": 88 }
    ]
  },
  {
    "id": 5,
    "name": "Ethan",
    "age": 19,
    "sex": "male",
    "address": {
      "country": "Thailand",
      "province": "Chonburi"
    },
    "points": [
      { "subject": "Math", "point": 82 },
      { "subject": "Programming", "point": 79 },
      { "subject": "English", "point": 80 }
    ]
  },
  {
    "id": 6,
    "name": "Fiona",
    "age": 18,
    "sex": "female",
    "address": {
      "country": "Thailand",
      "province": "Bangkok"
    },
    "points": [
      { "subject": "Math", "point": 88 },
      { "subject": "Programming", "point": 90 },
      { "subject": "English", "point": 84 }
    ]
  },
  {
    "id": 7,
    "name": "George",
    "age": 21,
    "sex": "male",
    "address": {
      "country": "Thailand",
      "province": "Nakhon Ratchasima"
    },
    "points": [
      { "subject": "Math", "point": 75 },
      { "subject": "Programming", "point": 80 },
      { "subject": "English", "point": 70 }
    ]
  },
  {
    "id": 8,
    "name": "Hannah",
    "age": 20,
    "sex": "female",
    "address": {
      "country": "Thailand",
      "province": "Chiang Rai"
    },
    "points": [
      { "subject": "Math", "point": 92 },
      { "subject": "Programming", "point": 89 },
      { "subject": "English", "point": 91 }
    ]
  },
  {
    "id": 9,
    "name": "Ivan",
    "age": 19,
    "sex": "male",
    "address": {
      "country": "Thailand",
      "province": "Songkhla"
    },
    "points": [
      { "subject": "Math", "point": 68 },
      { "subject": "Programming", "point": 72 },
      { "subject": "English", "point": 74 }
    ]
  },
  {
    "id": 10,
    "name": "Julia",
    "age": 21,
    "sex": "female",
    "address": {
      "country": "Thailand",
      "province": "Udon Thani"
    },
    "points": [
      { "subject": "Math", "point": 86 },
      { "subject": "Programming", "point": 91 },
      { "subject": "English", "point": 89 }
    ]
  }
]

// const loadStudents = (data:Students) =>{
//   console.log(String(data.length))
// }
// loadStudents(studentsJson);
// const calculateStudentAverage = (student:Student) =>{
//   let avg = 0;
//   for(let i = 0;i<3;i++){
//       avg+= student.points[i].point
//     }
//     avg = avg/3
//   console.log(avg);
// }
// calculateStudentAverage(studentsJson[0]);
// const getStudentsByProvince = (student:Students,province:string) => {
//   for(let i = 0;i<student.length;i++){
//     if(student[i].address.province === "Bangkok"){
//       console.log(student[i]);
//     }
//   }

// }
// getStudentsByProvince(studentsJson,"Bangkok");
// const findTopProgrammingStudent = (students:Students) => {
//   let max = students[0];
//   for(let i = 1;i<students.length;i++){
//     if(max.points[1].point < students[i].points[1].point){
//         max = students[i];
//     }
//   }
//   console.log(max);
// }
// findTopProgrammingStudent(studentsJson);
// const core = (students:Students) => {
//   for(let i = 0;i < students.length;i++){
//     for(let j = 0;j<students.length -1 ;j++){
//       if(students[j].age > students[j+1].age){
//         let tmp = students[j];
//         students[j]= students[j+1];
//         students[j+1] = tmp;
//       }
//     }

//   }
//   const sortByAgeAndAverage = students.map((student) => {
//     let avg = 0;
//     for(let i =0;i<student.points.length;i++){
//       avg += student.points[i].point;
//     }
//     avg /= 3;

//   return {
//     "name": student.name,
//     "age" :student.age,
//     "average": avg
//   }
// });
//   console.log(sortByAgeAndAverage);
// }
// core(studentsJson);
const countStudentsByProvince = (students:Students) => {
  type count = {
    province:string,
    score:number
  }
  type counts = count[];
  let procount :counts = [];
  let n = 0;
  for(let i = 0;i< students.length;i++){

  let stuCompare = students[i].address.province ;
  let found = procount.find(item => item.province === stuCompare);
  if (found){
    found.score += 1;
  }else {
    procount.push({province:stuCompare,score:1});
  }

  }
  console.log(procount);
}
countStudentsByProvince(studentsJson);