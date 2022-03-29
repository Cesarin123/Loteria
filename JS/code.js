function muestraTableros(){

}

(function() {
    var oDiv = document.getElementById('card1');
    oDiv.addEventListener('click', function() {
        this.setAttribute('style', 'background-image: /Loteria/images/1.png');
    }, false);
})();

//start of the game if conditions are met
function inicio(){
    const nombreIn = document.getElementById('nombre-field').value;
    if(nombreIn == ''){
        console.log("No ha ingresado un nombre");
    }
    else{
        console.log("ok");
    }
}

//eventos al dar clic a los radio buttons 
const boton = document.querySelector('.boton-inicio');
const radios = document.querySelectorAll('input[name="check"]');
boton.addEventListener("click", () =>{
    // console.log("probando")
    let selected;
    for(const radio of radios){
        if(radio.checked){
            selected = radio.id;
            break;
        }
    }
    console.log(`You selected ${selected}`);

});

//loop thru an array of images
const cartasTablero = ["/images/1.png",
"/images/2.png", "/images/3.png", "/images/4.png",
"/images/5.png", "/images/6.png", "/images/7.png",
"/images/8.png", "/images/9.png", "/images/10.png"];

var index = 0;

function makeImage(){
    var img = document.createElement('img')
    img.src = cartasTablero[index];
    document.getElementById('adorno').appendChild(img);
    console.log("ok, img tag generated");
}

function nextImage(){
    var img = document.getElementById('card1').getElementsByTagName('img')[0]
    index++;
    index = index % cartasTablero.length;
    img.src = cartasTablero[index];
}

function insertImages(){
    // var div = document.getElementById('card1');
    // var div2 = document.getElementById('card2');
    // var divs = div.getElementsByTagName('div');
    // var img = document.createElement('img');
    // img.src = cartasTablero[index];
    // div.appendChild(img);
    // div2.appendChild(img);
    var div = document.getElementById('boardRow');
    var divs = div.getElementsByTagName('div');
    var divArray = [];
    for (var i = 0; i < divs.length; i++) {
        divArray.push(divs[i]);
        var img = document.createElement('img');
        img.src = cartasTablero[index];
}
    for(var j = 0; j<divArray.length; j++){
    // console.log(divArray[j]);
    // var hello = document.createElement('img');
    divArray[j].style.backgroundImage="url(/images/1.png)";
    // var xd = document.getElementById(divArray[j])
    }
}