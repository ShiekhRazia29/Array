marks = [ [78, 76, 94, 86, 88],
 [91, 71, 98, 65, 76],
[95, 45, 78, 52, 49] ]
var sum=0
for(var i of marks){
    for(var j of i){
        sum+=j
    }
}
console.log(sum);
//How to find all pairs in an array of integers whose sum is equal to the given number?
var number = 30
var num = [10, 11, 12, 13, 14, 17, 18, 19]
new_array=[]
for(var i of num){
    for(var j of num){
        if(i+j===number){
            new_array.push(i,j);

        }
    }
}
console.log(new_array);