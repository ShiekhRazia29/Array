//Write a program to count how many odd numbers are there and how many even numbers are there in a given list.

var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
count1=0
count2=0
for(var i of elements){
    if(i%2===0){
        count1=count1+1   
    }
    else{
        count2=count2+1
    }
}
console.log("Count of even numbers:",count1,"\nCount of odd numbers:",count2);
//Write a program to console the sum of odd numbers and sum of even numbers from a given list.

var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
even_sum=0
counta=0
countb=0
odd_sum=0
for(var i of elements){
    if(i%2===0){
        even_sum=even_sum+i
        counta=counta+1
    }
    else{
        odd_sum=odd_sum+i
        countb=countb+1
    }
}
even_avg=even_sum/counta
odd_avg=odd_sum/countb
console.log("Even sum is",even_sum,"\nOdd sum is",odd_sum);
console.log("Even average:",even_avg,"\nodd average:",odd_avg);