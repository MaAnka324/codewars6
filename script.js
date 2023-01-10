///////////////////////////////Get the Middle Character (7kyu)
function getMiddle(s)
{
  //Code goes here!
  if(s.length%2==0){
    return s[Math.ceil(s.length/2, 1) - 1] + s[Math.ceil(s.length/2, 1)]
  }
  else {
    return s[Math.ceil(s.length/2, 1) - 1]
  }
}




/////////////////////////
function findAverage(array) {
  // your code here
  let sum = 0
  for(let i = 0; i < array.length; i++){
    sum += array[i]
  }
  if(array.length !== 0)return sum/array.length
  else return 0
}
