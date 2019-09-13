//**Contador**
// window.onload > hace que la función se ejectute cuando se termine de cargar la página
//(Solo se puede poner una vez)
window.onload = function() {
  var contador = 0;
  var numeroMuestra = 203;
  //querySelectorAll >devuelve una lista de todos los elementos de clase boton
  const botones = document.querySelectorAll(".botom");

  // Estoy agregando un evento que es "Dar click" (addEventListener), y
  //.forEach>  por cada click me afecta la función contar
  botones.forEach(buttom => {
    buttom.addEventListener("click", contar);
  });
  // Un Contador es una variable entera (int) que nos indica cuantas veces ha ocurrido un evento.
  function contar() {
    contador++;
    document.getElementById("mostrar").innerHTML = numeroMuestra + contador;
  }
};
