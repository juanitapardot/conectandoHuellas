
document.getElementById("nombre").addEventListener("keyup", function() {
  var name = document.getElementById("nombre").value;
  var id = document.getElementById("nombre").getAttribute("id");

  // console.log(vv);
  soloLetras(name, id);
  // numeros(edad);
});

document.getElementById("identificacion").addEventListener("keyup", function() {
  var edad = document.getElementById("identificacion").value;
  var id = document.getElementById("identificacion").getAttribute("id");
  numeros(edad,id);
});

document
  .getElementById("telefono")
  .addEventListener("keyup", function() {
    var telefono = document.getElementById("telefono").value;
  var id = document.getElementById("telefono").getAttribute("id");
    numeros(telefono,id);
  });

  document.getElementById("aporte").addEventListener("keyup", function() {
    var edad = document.getElementById("aporte").value;
    var id = document.getElementById("aporte").getAttribute("id");
    numeros(edad,id);
  });

function soloLetras(campo, id) {
  if (campo == "") {
    // console.log('vacio');
    document.getElementById("mensaje"+id).innerHTML = "";
    document.getElementById(id).style.border = "";
    document.getElementById(id).style.boxShadow = "";
  } else {
    if (campo.length >=5){
      console.log('es mayor a cero');
      var patt = new RegExp("^[A-Z]+$", "i");
      var res = patt.test(campo);
    // console.log(res);
    if (res === true) {
      var validacion = document.getElementById("mensaje"+id);
      validacion.innerHTML='';
      console.log(id);
      document.getElementById(id).style.border = "2px solid #28B463";
      document.getElementById(id).style.boxShadow = "0px 0px 25px #28B463";
    } else {
      document.getElementById("mensaje"+id).innerHTML = "Debe ingresar solo letras";
      document.getElementById(id).style.border = "2px solid #E74C3C";
      document.getElementById(id).style.boxShadow = "0px 0px 25px #E74C3C";
    }
    }else{
      console.log('menor');
      document.getElementById("mensaje"+id).innerHTML= "El "+ id + " debe tener minimo cinco caracteres";
      document.getElementById(id).style.border = "2px solid #E74C3C";
      document.getElementById(id).style.boxShadow = "0px 0px 25px #E74C3C";
    }
    
  }
}

function numeros(campo,id) {
  if (campo == "") {
    document.getElementById("mensaje"+id).innerHTML = "";
    document.getElementById(id).style.border = "";
    document.getElementById(id).style.boxShadow = "";
  } else {
    
    var patt = new RegExp("^([0-9])*$");
    var res = patt.test(campo);
    if (res === true) {
      // alert("coincide");
      document.getElementById(id).style.border = "2px solid #28B463";
      document.getElementById(id).style.boxShadow = "0px 0px 25px #28B463";
    } else {
      document.getElementById(id).style.border = "2px solid #E74C3C";
      document.getElementById(id).style.boxShadow = "0px 0px 25px #E74C3C";
      document.getElementById("mensaje"+id).innerHTML= "Solo números";
    }
  }
}

function validarFormulario(){
  var elementos = document.querySelectorAll('.form').values;
  var modal = document.getElementById("felicitaciones1");

  if (elementos.length == ''){
    console.log('estan vacios');
    modal.style.display = "none";

   
  }
  if (elementos >= 1){
    
    modal.style.display = "block";
    console.log("llenos");}
// var span = document.getElementsByClassName("cerrar")[0];

  
}