function palendrome(inputvalue){
    if(inputstring.length>10){
        document.getElementById('solution').innerHTML="<h1>STRING LENGTH BIGGER THAN 10 NOT ALLOWED</h1>";
    }

    else{
    let secondvalue=inputvalue.toLowerCase();
    var reversestringarray=[];

    for(var k=secondvalue.length-1;k>=0;k--){
       reversestringarray.push(secondvalue[k]);
    }
    var reversestring="";
    for(var a=0;a<reversestringarray.length;a++){
        reversestring+=reversestringarray[a];
    }
    if(reversestring===inputsecond){
        document.getElementById('solution').innerHTML="<h1>YES! THIS IS A PALENDROME</h1>";
    }
    else{
        document.getElementById('solution').innerHTML="<h1>NO! THIS IS NOT A PALENDROME</h1>";

    }
}
}