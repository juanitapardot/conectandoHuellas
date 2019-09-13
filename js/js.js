

document.getElementById("nombre").addEventListener("keyup", function() {
  var name = document.getElementById("nombre").value;
  var id = document.getElementById("nombre").getAttribute("id");
  soloLetras(name, id);
});

document.getElementById("edad").addEventListener("keyup", function() {
  var edad = document.getElementById("edad").value;
  var id = document.getElementById("edad").getAttribute("id");
  numeros(edad,id);
});

document
  .getElementById("telefono")
  .addEventListener("keyup", function() {
    var telefono = document.getElementById("telefono").value;
   var id = document.getElementById("telefono").getAttribute("id");
    numeros(telefono,id);
  });


  
  document.getElementById("enviar").addEventListener("click", function() {
    validarFormulario();
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
    document.getElementById("mensaje"+id).innerHTML = "No puede estar vacio";
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
  
  var modal = document.getElementById("felicitaciones1");
  var name1 = document.getElementById("nombre").value;
  var telefono = document.getElementById("telefono").value;
  var edad = document.getElementById("edad");
  var informacion = document.getElementById("historiaAdopcion");
  var informacion = document.getElementById("email");
  
  if (name1.length == 0 && edad.length == 0 && telefono.length == 0 ){
    console.log('estan vacios');
    modal.style.display = "none";
  } 
   
  // }else{
  //   modal.style.display = "block";
  //   console.log("llenos");}
// var span = document.getElementsByClassName("cerrar")[0];

  
}

// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }