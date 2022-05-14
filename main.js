let numeroRan;
let temporal;
let ingreso = "";
//This fun will create a random number with Math
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

  document.getElementById('codigo').innerHTML = temporal;
}
//We call the fun to generate a numer at the start of the page. Take into account that if the script isn't loaded at the end of the body it won't work
generateNumber();

//This fun registers the number cliked, although it's on spanish the fun name means "Click made"
function hizoClick(id) {

  if (ingreso.length < 4) {
    ingreso = ingreso + document.getElementById(id).id ;
    document.getElementById('input').innerHTML = ingreso;
    console.log(ingreso);
  }

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

  function comparar() {
    if (ingreso == temporal) {
      document.getElementById('succ').innerHTML = "Codigo correcto";

    }else{
        document.getElementById('succ').innerHTML = "Codigo erroneo";
        
    }
  }
