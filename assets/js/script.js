var registrar = ()=>{
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eSBtnAccion = document.getElementById("sBtnAccion");
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
    console.log(listadoNuevo)
    localStorage.setItem("alumnos",JSON.stringify(listadoNuevo));
    render = "<table>"
    render += "<tr><th>Nombre</th><th>Apellido</th><th>Accion</th></tr>"
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        render+="<tr>"
        render+="<td>"+element.nombre+"</td>";
        render+="<td>"+element.apellido+"</td>";
        render+="<td>"
        render+="<button id='btnEditar"+i+"'>Editar</button>"
        render+="<button>Eliminar</button>"
        render+="</td>"
        render+="</tr>"
    }
    render+="</table>"
    eContenedorTabla.innerHTML = render;
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        var eBtnEditar = document.getElementById("btnEditar"+i);
        eBtnEditar.addEventListener("click",()=>{
            let sBtn = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>"
            eSBtnAccion.innerHTML = sBtn
            eNombre.value = element.nombre;
            eApellido.value = element.apellido;
        })
        
    }
}
document.getElementById("btn").addEventListener("click",registrar)