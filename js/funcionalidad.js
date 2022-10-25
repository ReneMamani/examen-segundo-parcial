

function iniciarSesion(evento) {
  var input = document.getElementById("nombre_usuario");
  var nombre = input.value;
  if (nombre == "") {
      alert("Ingrese su usuario");
  } else {
      var mensaje = document.getElementById("mensaje");
      mensaje.textContent = "Bienvenid@ " + nombre;
      input.value = "";
  }
}
function convertir(){
  var valor=parseFloat(document.getElementById('cantidad').value);
  //document.getElementById('valor').innerHTML="<br>"+valor+"<br>";
  var de=document.getElementById('de').value;
  var a=document.getElementById('a').value;
  var dolar=6.86;
  var euro=6.78;
  resultado=0;
  //bol a $
  if(de==1&&a==2){
    resultado=valor/dolar;
  }
  //bol a euro
  else if(de==1&&a==3){
    resultado=valor/euro;
  }
  //$ a bs
  else if(de==2&&a==1){
    resultado=valor*dolar;
  }
  // $ a euro
  else if(de==2&&a==3){
    resultado=valor*(dolar/euro);
  }
  //euro a bol
  else if(de==3&&a==1){
    resultado=valor/euro;
  }
  //euro a $
  else if(de==3&&a==2){
    resultado=valor*(euro/dolar);
  }
  else{
    resultado=valor;
  }
  document.getElementById('resultado').innerHTML="Resulado: "+resultado.toFixed(2);
}