function fila(fecha, campo1, campo2, campo3, campo4, campo5, campo6, campo7, provincia, estacion, posicion) {
    this.fecha = fecha;
    this.campo1 = campo1;
    this.campo2 = campo2;
    this.campo3 = campo3;
    this.campo4 = campo4;
    this.campo5 = campo5;
    this.campo6 = campo6;
    this.campo7 = campo7;
    this.provincia = provincia;
    this.estacion = estacion;
    this.posicion = posicion;
}
let filas = [];
let primero = -20;
let ultimo = 0;
let startTime = new Date();
let endTime;
let ya_ordenado = [false, false, false, false, false, false, false]; //Array que se usará para saber si un campo ha sido ordenado dándole a su cabecera en la tabla o no
$(document).ready(function () {
    let url_api = "https://api.github.com/users/pablobravo44/repos";
    let datos = "";
    $.ajax({
        url: url_api,
        dataType: "text",
        success: function (data) {
            console.log(data);
            generarProyectos(data);
        }
    });
});


function generarProyectos(data) {
    let html_proyectos = "";
    data = $.parseJSON(data);
    $.each(data, function(i, item) {
        if(item.name=="pablobravo44.github.io"){
            return 0; //Continue en Jquery
        }
        html_proyectos+=`<div class="card"><div class="project-img"><img src="content/main.png" alt="tribute page"></div><div class="desc"><h3 class="project-tile"><a target="_blank" href="${item.html_url}">${item.name}<a></h3><p>${item.description}</p></div></div>`
    });
    $("#proyectos").html(html_proyectos);
}

