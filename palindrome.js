var string_pal = ['m','a','l','a','y','a','l','a','m'];
var array=[]
for(var i=string_pal.length-1;i>=0;i--){
    array.push(string_pal[i]);
}
var count=0
for(j=0;j<string_pal.length;j++){
    if(string_pal[j]===array[j])
    count++
}
if(count===string_pal.length){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");

}