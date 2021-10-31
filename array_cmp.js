//Given two arrays, find which numbers are not present in the second array
var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
new_list=[]
for(var i of list1){
    if(!list2.includes(i)){
        new_list.push(i)
    }
}
console.log(new_list);

