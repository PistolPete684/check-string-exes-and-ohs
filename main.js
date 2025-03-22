function XO(str) {
  //Split the string into an array
  let array = str.split('');
  //Create a new array with only the "x" and "X"
  let xArray = array.filter((letter) => letter === "x" || letter === "X");
  //Create a new array with only the "o" and "O"
  let oArray = array.filter((letter) => letter === "o" || letter === "O");
  //Compare the two new strings to see if they are equal in length
  return xArray.length === oArray.length;
}