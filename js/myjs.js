$(document).ready(function() {
    $("#servicios").click(function(){
        $("#main").load("servicios.html");
    });
    $("#contactos").click(function(){
        $("#main").load("contactos.html");
    });
});