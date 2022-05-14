let numeroRan;
let temporal;
let ingreso = "";
function generateNumber() {
  numeroRan = Math.floor(Math.random() * 10000);
  temporal = numeroRan.toString();
  if (temporal.length == 3) {
    temporal = "0" + temporal;
  }else if (temporal.length == 2) {
    temporal = "00" + temporal;
  }else if(temporal.length == 1){
    temporal = "000" + temporal;
  }
  /*
  if (temporal.length <= 1) {
    temporal = "000" + temporal;
  }else if (temporal.length <= 2) {
    temporal = "00" + temporal;
  }else {
    temporal = "0" + temporal;
  }
*/
  document.getElementById('codigo').innerHTML = temporal;
}
generateNumber();

function hizoClick(id) {
  
  if (ingreso.length < 4) {
    ingreso = ingreso + document.getElementById(id).id ;
    document.getElementById('input').innerHTML = ingreso;
    console.log(ingreso);
  }
  /*
  ingreso = document.getElementById(id).id;
  console.log(ingreso);
  */
}

function borrarIngreso() {
  ingreso = ingreso.slice(0, (ingreso.length - 1));
  document.getElementById('input').innerHTML = ingreso;
  document.getElementById('succ').innerHTML = "Result...";
}
function borrarTodo() {
  ingreso = "";
  document.getElementById('input').innerHTML = ingreso;
  document.getElementById('succ').innerHTML = "Result...";
}
/*
  else if (ingreso.length >= 4) {
    ingreso = "";
    ingreso = ingreso + document.getElementById(id).id ;
    console.log(ingreso)
  }
*/
  function comparar() {
    if (ingreso == temporal) {
      document.getElementById('succ').innerHTML = "Codigo correcto";
      ingreso = "";
    }else{
        document.getElementById('succ').innerHTML = "Codigo erroneo";
        ingreso = "";
    }
  }

  /*
  console.log(document.getElementById(id).id);
  arregloCod.push(document.getElementById(id).id);
  console.log(arregloCod.length);
*/
