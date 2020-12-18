function getParagraph(){
    var input=[];
    for(var i=1; i<=6; i++){
        input.push(document.getElementById("1_input"+i).value);
        input.join(". ");
        document.getElementById("paragraph1").innerHTML = input.join(". ");
    }
    var input2=[];
    for(var i=1; i<=6; i++){
        input2.push(document.getElementById("2_input"+i).value);
        input2.join(". ");
        document.getElementById("paragraph2").innerHTML = input2.join(". ");
    }
}