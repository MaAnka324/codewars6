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





