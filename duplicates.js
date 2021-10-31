var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
uniques=[]
duplicates=[]
count=0
for(var i of number_list){
if(!uniques.includes(i)){
uniques.push(i)
}
else{
    duplicates.push(i)
    count+=1
}
}
console.log(uniques);
console.log(duplicates,count);
    

//remove occurence of a givem sub string
var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
var subStr = "over";
var split_str = mainStr.split(" ");
output="";
for(var i of split_str){
    if(i===subStr){
        console.log("");
    }else{
        output=output+i+" "

    }
}
console.log(output);