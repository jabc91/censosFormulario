function captura(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fnacimiento = document.getElementById("fnacimiento").value;
    var mnacimiento = document.getElementById("mnacimiento").value;
    var anacimiento = document.getElementById("anacimiento").value;
    var sexo = document.getElementById("sexo").value;
    var estadoc = document.getElementById("estadoc").value;
    document.write("Tu nombre es: " + nombre);
    document.write("<br>");
    document.write("Tu apellido es: " +apellido);
    document.write("<br>");
    document.write("Tu fecha de nacimiento es: " +fnacimiento);
    document.write("<br>");
    document.write("Tu mes de nacimiento es: " +mnacimiento);
    document.write("<br>");
    document.write("Tu año de nacimiento es: " +anacimiento);
    document.write("<br>");
    document.write("Tu sexo es: " +sexo);
    document.write("<br>");
    document.write("Tu estado civil es: " +estadoc);
    document.body.style.backgroundColor = "skyblue"
    document.body.style.fontSize = "50px";
    document.body.style.color = "black";
    document.body.style.fontFamily = "Arial";

}
