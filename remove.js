//to remove an element from the list
var array=["blue","black","brown","red","green","yellow"]
console.log(array.pop());//removes last element from the array
console.log(array.push("Razia"));//provides the length of the array updated after pushing the new element
console.log(array.reverse());// prints the arrayin reverse order
console.log(array.shift());//removes the first element from the array
//slice method removes the particular portion from the array and prints it
console.log(array.slice(2,4));
console.log(array.sort());//arranges the elements alphabetically
console.log(array.toString());//provides the elements in the string form
console.log(array.unshift("Marron","white"));//used to add one or more elements to the beginning of the array and returns 
//new length of the array
console.log(array.join(' '+'next'+' '));