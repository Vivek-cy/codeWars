//filter strings from a given array using for loop.
function filter_list(arr) {
  // Return a new array with the strings filtered out
  const result = [];
  for(let i = 0; i < arr.length-1; i++){
    if(typeof arr[i] === 'number'){
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(filter_list([1, 2, 'a']));

//filter strings using array filter

const filter_list = (arr) =>{
  const result = [];
  arr.filter(checkf);
  function checkf(elem) {
   if (typeof elem === 'number'){
     result.push(elem);
   }
  }
  return result;
}
console.log(filter_list([1, 2, 'a']));

//convert string to number
const strToNum = (str) =>{
  const x = Number(str);
  return x;
}
console.log(strToNum('345'));
