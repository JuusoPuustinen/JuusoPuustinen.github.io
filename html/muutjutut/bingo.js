var tulleet = []

function arpominen()
{
    var randomnumero = Math.round(Math.random()*75)
    

    for (var i = 0; i < 300; i++){
        var onko = tulleet.includes(randomnumero)
        console.log(onko)
        console.log(tulleet)
        if(randomnumero == 0){
            onko = true
        }
        if(onko === false){
            document.getElementById("numerokohta").innerHTML = randomnumero;
            var node = document.createElement("LI");                 
            var textnode = document.createTextNode(randomnumero);         
            node.appendChild(textnode);                             
            document.getElementById("minilista").appendChild(node);
            tulleet.push(randomnumero)
            break;
        } else {
            randomnumero = Math.round(Math.random()*75)
        }
    }
}