//window.onload = inicio;

$(document).ready(inicio);
function inicio() 
{
    /*Se añade el css al body */
    $("body").css({
        'background-color': 'black',
        'background-image': 'url("./bg.png")',
        'background-repeat': 'no-repeat',
        'background-size': '100% 400%',
        'font-family': '"starWars", Arial, sans-serif',
        'color': 'rgba(255, 217, 3, 0.797)',
        'animation': 'moveBackground 2.5s linear infinite'
    });

    /*Creo un div que contendra las cartas */
    let divGeneral = $("<div id='divGeneral'></div>");
    /*Añado el css al divGeneral */
    divGeneral.css({
        'width': '100%',
        'height': '600px',

        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',

        'position': 'relative',
        'perspective': '1200'
    });
    divGeneral.appendTo("body"); // Agrega el nuevo div al final del body


    /*Creo los div que seran las cartas */
    let carta1 = $("<div id='c1' class='carta'></div>");
    let carta2 = $("<div id='c2' class='carta'></div>");
    let carta3 = $("<div id='c3' class='carta'></div>");
    let carta4 = $("<div id='c4' class='carta'></div>");
    let carta5 = $("<div id='c5' class='carta'></div>");

    /*Añdo los div correspondientes a las cartas al div principal */
    carta1.appendTo(divGeneral);
    carta2.appendTo(divGeneral);
    carta3.appendTo(divGeneral);
    carta4.appendTo(divGeneral);
    carta5.appendTo(divGeneral);

    /*Se añade el css a las cartas */
    $('.carta').css({
        'width': '15%',
        'height': 'auto',
        'background-image': 'url("./card_bg.jpg")',
        'position': 'absolute',
        'border': '2px solid',
        'border-radius': '25px',
        'margin-right': '0%',

        'display': 'block',
        'justify-content': 'center',

        'align-items': 'center',

        'transition': '0.5s',
        'transform-origin': 'bottom center',
        'cursor': 'pointer',
        'box-shadow': '0 0px 30px rgba(255, 217, 3, 0.797)',
    });

    /*TITULOS DE LAS CARTAS(NOMBRES) */

    let nombre1 = $("<h1 class='nombres'>CHEWBACKA</h1>");

    let nombre2 = $("<h1 id='titulo2' class='nombres'>DARTH <br>VADER</h1>");
    let nombre3 = $("<h1 class='nombres'>R2-D2</h1>");
    let nombre4 = $("<h1 class='nombres'>C3-P0</h1>");
    let nombre5 = $("<h1 class='nombres'>YODA</h1>");

    nombre1.appendTo(carta1);
    nombre2.appendTo(carta2);
    nombre3.appendTo(carta3);
    nombre4.appendTo(carta4);
    nombre5.appendTo(carta5);

    /*Añado el css a los H1 */
    $('h1').css({
        'text-align': 'center',
        'margin-top': '10%',
        'font-size': 'x-large'
    });

    /*Añado el css al id titulo2 */
    $('#titulo2').css({
        'margin-bottom': '0%'
    });

    /*Creo las etiquetas imagen */
    var imagen1 = $("<img id='imagen1' src='./img/1.jpeg'></img>");
    var imagen2 = $("<img id='imagen2' src='./img/2.jpeg'></img>");
    var imagen3 = $("<img id='imagen3' src='./img/3.jpeg'></img>");
    var imagen4 = $("<img id='imagen4' src='./img/4.jpeg'></img>");
    var imagen5 = $("<img id='imagen5' src='./img/5.jpeg'></img>");


    /*Agrego las imagenes para que esten dentro de las cartas */
    imagen1.appendTo(carta1);
    imagen2.appendTo(carta2);
    imagen3.appendTo(carta3);
    imagen4.appendTo(carta4);
    imagen5.appendTo(carta5);

    /*Añado el css al imagen2 */
    $('#imagen2').css({
        'margin-top': '0%'
    });

    /*Añado la clase personaje a todas las imagenes de los personajes */
    $("img").addClass("personaje");

    /*Aplico a todas las imagenes de los personajes el mismo css,para ello uso su clase */
    $(".personaje").css({
        "border-radius": "20px",  // Cambia el borde a azul
        "width": "75%",
        "height": "250px",
        "margin-top": "15%",
        "margin-left": "10%",
        "margin-bottom": "10%",
        "box-shadow": "7px 7px 5px rgba(0, 0, 0, 0.3)" // Agrega una sombra azul
    });

    /*Aplico inclinacion a las cartas */
    $('.carta:nth-child(1)').css('transform', 'rotate(-23deg)');
    $('.carta:nth-child(2)').css('transform', 'rotate(-20deg)');
    $('.carta:nth-child(3)').css('transform', 'rotate(0deg)');
    $('.carta:nth-child(4)').css('transform', 'rotate(20deg)');
    $('.carta:nth-child(5)').css('transform', 'rotate(23deg)');

    /*Gestiono la capa que ocupa cada carta para que unas se vean por encima de otras */
    $("div#c1").css({
        "right": "55%",
        "margin-top": "4%"

    });

    $("div#c2").css({
        "right": "46%",
        "margin-top": " 1% ",
        "z-index": "9"

    });

    $("div#c3").css({
        "position": "absolute",
        "transform": "translateY(-35px)",
        "z-index": " 10 "

    });


    $("div#c4").css({
        "left": "46%",
        "z-index": "8"
    });


    $("div#c5").css({
        "left": "55%",
        "margin-top": "4%"
    });

    /*AÑADO EL EVENTO MOUSEOVER A LOS DIV*/

    // Almacenar el z-index original de cada carta al cargar la página
    $("div.carta").each(function ()
    {
        $(this).data("original-z-index", $(this).css("z-index"));
    });

    // Cambiar el z-index de la carta al pasar el mouse sobre ella
    $("div.carta").mouseover(function ()
    {
        $(this).css("z-index", "99");

        $(this).css("transition", "transform 0.3s ease");

    });

    // Restablecer el z-index cuando el mouse sale de la carta
    $("div.carta").mouseout(function ()
    {
        // Restaurar el z-index original
        $(this).css("z-index", $(this).data("original-z-index"));
    });


    /*AÑADO EL EVENTO CLICK PARA LOS PERSONAJES */

    $("img.personaje").click(function ()
    {

        var idElementoClicado = this.id;

        console.log(idElementoClicado);
        obtencionDatosPersonajes(idElementoClicado);

    });
}

/*Funcion creada para obtener los datos del personaje seleccionado e imprimir la informacion en relacion a el */
function obtencionDatosPersonajes(personaje) 
{
    // Verificar si el elemento divInformacion existe en el DOM
    if ($("#informacion").length > 0)
    {
        // Si el elemento existe, eliminarlo
        $("#informacion").remove();
    }

    /*Filtro por la opcion elegida por el usuario, la imagen 1 y 5 tienen una url distinta que la de las imagenes 2, 3 y 4 */
    if ("imagen1" == personaje || "imagen5" == personaje)
    {
        /*Obtengo los datos de la api de todos los personajes */
        $.ajax({
            type: "GET",
            url: "https://swapi.dev/api/people/?page=2",
            dataType: "json",
            success: data =>
            {
                /*Si el personaje elegido es la imagen1 es chewbacca */
                if ("imagen1" == personaje)
                {
                    /*Guardo los datos de chewbacca y llamo a la funcion creacionDatosDiv, encargada de crear el div con toda la informacion del personaje */
                    let chewbacca = data.results[2];
                    creacionDatosDiv(chewbacca);
                } else /*Si el personaje elegido es la imagen2 es yoda */
                {
                    /*Guardo los datos de yoda y llamo a la funcion creacionDatosDiv, encargada de crear el div con toda la informacion del personaje */
                    let yoda = data.results[8];
                    creacionDatosDiv(yoda);
                }
            }
        });
    } else
    {
        /*Obtengo los datos de la api de todos los personajes */
        $.ajax({
            type: "GET",
            url: "https://swapi.dev/api/people/",
            dataType: "json",
            success: data =>
            {
                /*Filtro por la imagen seleccionada */
                switch (personaje)
                {
                    case "imagen2":

                        /*Guardo los datos de darthVader y llamo a la funcion creacionDatosDiv, encargada de crear el div con toda la informacion del personaje */
                        let darthVader = data.results[3];
                        creacionDatosDiv(darthVader);
                        break;

                    case "imagen3":

                        /*Guardo los datos de r2d2 y llamo a la funcion creacionDatosDiv, encargada de crear el div con toda la informacion del personaje */
                        let r2d2 = data.results[2];
                        creacionDatosDiv(r2d2);
                        break;

                    case "imagen4":

                        /*Guardo los datos de c3p0 y llamo a la funcion creacionDatosDiv, encargada de crear el div con toda la informacion del personaje */
                        let c3p0 = data.results[1];
                        creacionDatosDiv(c3p0);
                        break;
                }
            }
        });
    }
}

/* Funcion creada para crear el div, donde se metera la informacion del personaje */
function creacionDatosDiv(datosPersonaje) 
{
    /*Creamos el div y lo metemos en el body */
    let divInformacion = $("<div id='informacion' class='carta'></div>");
    $("body").append(divInformacion);

    /*Añado el css al divInformacion */
    $("#informacion").css({
        'margin-left': '20px',
        'padding': '20px',
        'color': 'black',

        'position': 'absolute',

        'transform': 'translateY(-500px)',
        
        'width': '15%',
        'height': 'auto',
        'background-image': 'url("./card_bg.jpg")',
        'position': 'absolute',
        'border': '2px solid',
        'border-radius': '25px',
        'margin-right': '0%',

        'display': 'block',
        'justify-content': 'center',

        'align-items': 'center',

        'transition': '0.5s',
        'transform-origin': 'bottom center',
        'cursor': 'pointer',
        'box-shadow': '0 0px 30px rgba(255, 217, 3, 0.797)',
    });

    /*Creamos la select para poder sacar las diferentes informaciones */
    let select = $("<select id='infoSelect'></select>");
    $("div#informacion").append(select);

    /*Metemos todas las opciones en la select */
    let optionBasica = $("<option value = 'informacionBasica'>Informacion basica</option>");
    $("select#infoSelect").append(optionBasica);

    let optionOrigen = $("<option value = 'informacionOrigen'>Mundo de origen</option>");
    $("select#infoSelect").append(optionOrigen);

    let optionFilms = $("<option value = 'informacionFilms'>Peliculas</option>");
    $("select#infoSelect").append(optionFilms);

    let optionVehiculos = $("<option value = 'informacionVehiculos'>Vehiculos</option>");
    $("select#infoSelect").append(optionVehiculos);

    /*Creamos el div con la informacion basica del personaje y se lo agregamos al div de informacion */
    let divInformacionBasica = $(`<div id='informacionBasica'>
        <ul>
            <li>Nombre: ${datosPersonaje.name}</li>
            <li>Altura: ${datosPersonaje.height}</li>
            <li>Peso: ${datosPersonaje.mass}</li>
            <li>Color de pelo: ${datosPersonaje.hair_color}</li>
            <li>Color de piel: ${datosPersonaje.skin_color}</li>
            <li>Color de ojos: ${datosPersonaje.eye_color}</li>
            <li>Año de nacimiento: ${datosPersonaje.birth_year}</li>
            <li>Genero: ${datosPersonaje.gender}</li>
        </ul></div>`);
    $("div#informacion").append(divInformacionBasica);

    /*Llamamos a la funcion que se encarga de crear el div del mundo de origen */
    informacionMundoOrigen(datosPersonaje.homeworld);

    /*Llamamos a la funcion que se encarga de crear el div con la informacion de las peliculas */
    informacionFilms(datosPersonaje.films);

    /*Juntamos los datos de los arrays de vehicles y starships del personaje */
    let urlsVehiculos = datosPersonaje.vehicles.concat(datosPersonaje.starships);

    /*Llamamos a la funcion encargada de generar el div de los vehiculos */
    informacionVehiculos(urlsVehiculos);

    /*Creo un evento de cambio, cuando seleccione un tipo de informacion, este mostrara esa informacion en el div #informacion */
    $("select#infoSelect").change(function (e)
    {
        /*Obtengo el valor de la select */
        let valorSelect = $("select#infoSelect").val();

        /*Oculto todos los divs por debajo del div#informacion */
        $("div#informacion > div").hide();

        /*Muestro el div correspondiente a la select */
        $("#" + valorSelect).show();
    });
}

/*La funcion creara un div oculto con la informacion del mundo que se le pase como url(json) */
function informacionMundoOrigen(urlMundoOrigen) 
{
    /*Obtenemos el json de la url proporcionada como parametro */
    $.ajax({
        type: "GET",
        url: urlMundoOrigen,
        dataType: "json",
        success: data =>
        {
            /*Creamos el div oculto, con la informacion del mundo de origen del personaje y se lo agregamos al div de informacion */
            let divInformacionOrigen = $(`<div id='informacionOrigen'>
            <ul>
                <li>Nombre: ${data.name}</li>
                <li>Periodo de rotacion: ${data.rotation_period}</li>
                <li>Periodo orbital: ${data.orbital_period}</li>
                <li>Diametro: ${data.diameter}</li>
                <li>Clima: ${data.climate}</li>
                <li>Gravedad: ${data.gravity}</li>
                <li>Terreno: ${data.terrain}</li>
                <li>Superficies de agua: ${data.surface_water}</li>
                <li>Poblacion: ${data.population}</li>
            </ul></div>`).hide();
            $("div#informacion").append(divInformacionOrigen);
        }
    });
}

/*La funcion creara un div oculto con la informacion de las peliculas en las que participo el personaje, que se le pase como url(json) */
function informacionFilms(urlsPeliculas) 
{
    /*Creo un div informacionFilms, con un elemento <ul>, luego meteremos los diferentes <il> correspondientes a la pelicula y su año */
    let divFilms = $("<div id='informacionFilms'><ul></ul></div>").hide();
    $("div#informacion").append(divFilms);

    /*Recorro el array de urlsPeliculas */
    for (let i = 0; i < urlsPeliculas.length; i++) 
    {
        /*Obtengo los json de cada una de las peliculas que hay en el array urlsPeliculas */
        $.ajax({
            type: "GET",
            url: urlsPeliculas[i],
            dataType: "json",
            success: data =>
            {
                /*Obtengo el nombre y el año de la pelicula y creo el <li>, que se introduce en el <ul> creado previamente */
                let infoFilm = $(`<li>${data.title} (${data.release_date})</li>`);
                $("div#informacionFilms > ul").append(infoFilm);
            }
        });
    }
}

/*La funcion recibe como parametro un array de urls donde esta la informacion de los vehiculos, con esa informacion crearemos un div oculto con los datos. */
function informacionVehiculos(urlsVehiculos) 
{
    /*Creo el div informacionVehiculos vacio y oculto */
    let divVehiculos = $("<div id='informacionVehiculos'></div>").hide();
    $("div#informacion").append(divVehiculos);

    /*Recorro el array de urlsVehiculos para obtener los diferentes json */
    for (let i = 0; i < urlsVehiculos.length; i++) 
    {
        /*Obtengo el json correspondiente a la celda i del urlsVehiculos */
        $.ajax({
            type: "GET",
            url: urlsVehiculos[i],
            dataType: "json",
            success: data =>
            {
                /*Creo un titulo del vehiculo h3 y añado la informacion en una lista desordenada, esta informacion se añade al div creado previamente */
                let infoFilm = $(`<h3>${data.name}</h3>
                    <ul>
                        <li>Modelo: ${data.model}</li>
                        <li>Manufacturado: ${data.manufacturer}</li>
                        <li>Coste en creditos: ${data.cost_in_credits}</li>
                        <li>Longitud: ${data.length}</li>
                        <li>Maxima Velocidad atmosferica: ${data.max_atmosphering_speed}</li>
                        <li>Nº tripulantes: ${data.crew}</li>
                        <li>Nº pasajeros: ${data.passengers}</li>
                        <li>Capacidad de carga: ${data.cargo_capacity}</li>
                    </ul>`);
                $("div#informacionVehiculos").append(infoFilm);
            }
        });
    }
}