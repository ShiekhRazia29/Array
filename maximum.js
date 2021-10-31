var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var max_num=0
for(var i=0; i<numbers.length;i++){
    if (numbers[i]>max_num){
        max_num=numbers[i]
    
    }
} 
console.log(max_num);
//Finding second maximum number inthe given array
var number=[50, 40, 23, 70, 56, 12, 5, 10, 7]  
var First_max=0;
var second_max=0;
for (var i =0;i<number.length;i++){
if (First_max<number[i]){
if (second_max<First_max){
second_max=First_max;
}
First_max=number[i];
}
else{
if (second_max<number[i]){
second_max=number[i];
}
}
}
console.log(second_max);

//Program to reverse a given array
var MyArray=[10,12,13,14,15,17]
reversedArray=[]
for(var i=MyArray.length-1;i>=0;i--){
    reversedArray.push(MyArray[i])
}
console.log(reversedArray);