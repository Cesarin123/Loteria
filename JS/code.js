function generateArray(){
    var $baseArray = [];
    while($baseArray.length < 16){
        var r = Math.floor(Math.random() * 54) + 1;
        if($baseArray.indexOf(r) === -1){
            $baseArray.push(r)}
    }

    return $baseArray;
}

function mostrarBaraja() {
    function css(element, style) {
        for (const property in style)
            element.style[property] = style[property];
    }
    const note = document.querySelector('.mySlides');
    css(note, {
        width: '123px',
        height: '168px',
        border: '22.5px solid rgb(18, 153, 0)',
        margin: '9px'
        }   
    );
    const arregloCompleto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54];
    var shuffled = shuffle(arregloCompleto);
    var curIndex = 0;
    var imgDuration = 5000;
    document.getElementById('hello').src = `/images/${shuffled[curIndex]}.png`;
    curIndex++;
    if (curIndex == shuffled.length){ 
        curIndex = 0; 
    }
    setTimeout("mostrarBaraja()", imgDuration);
}

function generarTablero(){
    const $baseArray = generateArray(16);
    console.log($baseArray)
    var div = document.getElementById('gameBoard');
    var divs = div.querySelectorAll('.cardCell');
    var tag = document.querySelectorAll("p");

    /*loops thru the elements of class name of cardCell inside the #gameBoard
    assigns them into an array and then changes de background image of the cells
    in each row*/
    var divArray = [];
    for (var i = 0; i < divs.length; i++) {
        divArray.push(divs[i]);
        divArray[i].style.backgroundImage=`url(/images/${$baseArray[i]}.png)`;
        console.log($baseArray[i])
    }
    
    /*it works hahaha but i need to reset the textNode everytime the user clicks
    the generar tablero button*/
    for(let $i=1;$i<=$baseArray.length;$i++){
        var tag = document.createElement("p");
        var node = document.createTextNode(`${$baseArray[$i-1]}`);
        tag.appendChild(node);
        var element = document.getElementById(`card${$i}`);
        element.appendChild(tag)
    }
}

function inicio(){
    const nombreIn = document.getElementById('nombre-field').value;
    if(nombreIn == '' ){
        console.log("No ha ingresado un nombre");
    }
    else{
        console.log("ok");
        mostrarBaraja();
        generarTablero();
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function marcarCasilla(numCasilla){
    var imagenSelec = document.getElementById("card" + numCasilla);
    var src = imagenSelec.style.backgroundImage;
    var nuevo = src.slice(5,-2);
    console.log(nuevo)
    var mazo = document.getElementById("hello");
    var srcMazo = mazo.src; //limpia source, cortar string y quedar con /numero.png
    var replaced = srcMazo.replace("http://127.0.0.1:5501", "");
    console.log(replaced);
    
    
    if(nuevo == replaced){
        //insertar piedra
        console.log("The strings are equeal");
        var selec = document.createElement('img');
        imagenSelec.appendChild(selec);
        selec.src = "/images/piedra.png"
        selec.style.width = '70px'
    }
    else{
        console.log("the strings aren't equal")
    }

}

