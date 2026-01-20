export const avg = (number:number[]) => {
  let n = 0;
  for(let i = 0;i<number.length;i++){
    n += number[i];
  }
  return n/3;
}