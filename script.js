document.addEventListener("DOMContentLoaded", function () {

    console.log("LALIGA FÚTBOL - Página cargada correctamente");


    // Animación de tarjetas

    const elementos = document.querySelectorAll(
        ".tarjeta, .paso, .foto, .partido"
    );


    elementos.forEach(function (elemento, indice) {

        elemento.style.opacity = "0";

        elemento.style.transform = "translateY(20px)";

        setTimeout(function () {

            elemento.style.transition = "all 0.6s ease";

            elemento.style.opacity = "1";

            elemento.style.transform = "translateY(0)";

        }, indice * 120);

    });


    // Mensaje al hacer clic en los enlaces

    const enlaces = document.querySelectorAll("nav a");


    enlaces.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            console.log(
                "Navegando a: " + enlace.textContent
            );

        });

    });

});