var registrar = ()=>{
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let nombre = eNombre.value;
    let apellido = eApellido.value;
    console.log(nombre);
    console.log(apellido);
    let persona = {"nombre":nombre,"apellido":apellido};
    console.log(persona)
    let listadoAntiguoStr = localStorage.getItem("alumnos");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    console.log(listaAntiguo)
    if(listaAntiguo==null){
        var listadoNuevo = [persona]
    }else{
        var listadoNuevo = [...listaAntiguo,persona]
    }
    localStorage.setItem("alumnos",JSON.stringify(listadoNuevo));
}
document.getElementById("btn").addEventListener("click",registrar)