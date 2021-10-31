var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100];
var Crorepati=0
var Lakhpati=0
var Dilwale =0
for(var i of kitna_paisa_hai){
    if(i>=10000000){
    Crorepati=Crorepati+1;
    
    }else if(i>=100000){
    Lakhpati=Lakhpati+1

    }else{
    Dilwale=Dilwale+1
    }
}
console.log("Count of Crorepati:",Crorepati,"\ncount of lakhpati:",Lakhpati,"\nCount of Dilwali",Dilwale);