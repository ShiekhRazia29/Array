char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
unique_list=[]
for(var i of char_list){
    if(!unique_list.includes(i)){
        unique_list.push(i)
    }
}
console.log(unique_list);

for(var r of unique_list){
    count=0
    for(var k of char_list){
    if (r === k){
    count+=1
    }
    }
    console.log(r,":",count," times");
    } 



    let a = '30'
    let b = 5
    c= a+b
    console.log(c);
