// var let & const
//var is function scope
function abcd(){
    for(var i=1;i<12;i++){
        console.log(i);
    }
    console.log(i);
}

abcd();