var aleatorio = Math.floor(Math.random() * 10) + 1;
var intentos = 0;
var correcto = false;

function facil(){
  alert("Intentos infinitos");
  
  while(correcto==false){
    var entrada=prompt("Introducir un numero del 1 al 10:");
    if (entrada==null){
      return;
    }
    intentos++;
    if(entrada==aleatorio){
      alert("¡Acertaste!");
      correcto=true;
      document.getElementById('resp').innerHTML=intentos;
      document.getElementById('num').innerHTML=aleatorio;
    }else
      {
        alert(entrada+" no es el numero aleatorio");
      }
  }
}

document.getElementById("fbtn").onclick = function () {
  location.href = "facil.html";
}

function normal(){
  alert("10 intentos");

  while (correcto==false&&intentos<10) {
    var entrada=prompt("Introducir un numero del 1 al 10:");
    if (entrada==null){
      return;
    }
    intentos++;    
    if (entrada==aleatorio) {
      alert("¡Acertaste!");
      correcto=true;
      document.getElementById('resp').innerHTML=intentos;
      document.getElementById('num').innerHTML=aleatorio;
    } else
    {
      alert(entrada+" no es el numero aleatorio");
    }
  }
}

document.getElementById("nbtn").onclick = function () {
  location.href = "normal.html";
}

function dificil(){
  alert("5 intentos.");

    while (correcto==false&&intentos<5) {
      var entrada=prompt("Introducir un número del 1 al 10:");
      if (entrada==null){
        return;
      }
      intentos++;
      if (entrada==aleatorio) {
        alert("¡Acertaste!");
        correcto=true;
        document.getElementById('resp').innerHTML=intentos;
        document.getElementById('num').innerHTML=aleatorio;
      } else
      {
        alert(entrada+" no es el numero aleatorio");
      }
    }
  }

  document.getElementById("dbtn").onclick = function () {
    location.href = "dificil.html";
  }

  