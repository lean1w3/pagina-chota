var button = document.getElementById('op1');
var main = document.getElementById('contenido');

function changeContent(content) {
    main.innerHTML = content;
}

button.addEventListener('click', function() {
    changeContent(`
        <h1 class="text-primary">vacio</h1>
        <h2 class="text-info">escenario 2</h2>
        <img src="multimedia/escenario2.jpg" alt="vacio" id="img" class="img-responsive center-block" style="max-height: 400px;">
        <p>Aun corriendo, la sombra está en todos lados, quizá lo mejor es no moverse y desear que no pase algo muy malo. La sombra te está cubriendo por completo, ya no sentís tus piernas cubiertas por completo, cuando te cubre el pecho sentis que ya no podes respirar y cuando cubre tus ojos nada más que una oscuridad se puede ver, como si hubieras perdido los ojos. Aunque no sientas siquiera un cerebro para procesar lo que pasa, parece que todo está por terminar, no sabes si alguien podría ayudarte o que haría, pero tal vez intentar gritar haga algo</p>
        <div class="col-xs-6">
            <button id="C2op1" class="btn btn-primary btn-block">Gritar al vacío</button>
        </div>
        <div class="col-xs-6">
            <button id="C2op2" class="btn btn-success btn-block">No hacer nada</button>
        </div>
    `);
});

main.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'C2op1') {
        changeContent(`
            <h1 class="text-primary">grito ensordecido</h1>
            <h2 class="text-info">escenario 3</h2>
            <img src="multimedia/escenario3.jpg" alt="grito" id="img" class="img-responsive center-block" style="max-height: 400px;">
            <p>Intentas gritar, no hay sonido pero se siente como si hubieras gritado. Nadie lo escuchó y el aire en tus pulmones se terminó más rápido, dudo que haya forma de escapar de esto, pero quien sabe que pudo haber logrado esos segundos extra de haber no hecho nada.</p>
            <br><br><br><br>
            <form class="form-horizontal">
                <div class="form-group">
                <label for="nombre" class="control-label col-sm-2">Nombre:</label>
                    <div class="col-sm-10">
                    <input type="text" id="nombre" class="form-control" placeholder="Ingrese su nombre">
                    </div>
                </div>
                <div class="form-group">
                <label for="pais" class="control-label col-sm-2">País:</label>
                    <div class="col-sm-10">
                    <input type="text" id="pais" name="pais" class="form-control" placeholder="Ingrese su país">
                    </div>
                </div>
                <div class="form-group">
                <label for="mail" class="control-label col-sm-2">Mail:</label>
                    <div class="col-sm-10">
                    <input type="email" id="mail" name="mail" class="form-control" placeholder="Ingrese su email">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                    <input type="submit" value="Enviar" class="btn btn-primary btn-block">
                </div>
                </div>
                </form>
        `);
    }
});

main.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'C2op2') {
        changeContent(`
            <h1 class="text-primary">bucle</h1>
            <h2 class="text-info">escenario 4</h2>
            <img src="multimedia/escenario4.jpg" alt="bucle" id="img" class="img-responsive center-block" style="max-height: 400px;">
            <p>Estás en un vacío que parece eterno, aunque alguien te escuchara en que podría ayudarte eso, es mejor no hacer nada y esperar a que el sentimiento tan horrible de ser incapaz de lograr algo desaparezca, hasta que en medio de la oscuridad eterna aparece una luz, es solo un punto blanco pero es algo distinto dentro de toda la oscuridad, ese punto se agranda hasta volverse una luz completamente cegadora y sin siquiera saber como, estas devuelta en el árbol, de vuelta de donde? No recordás haberte ido pero así se siente, pero no hay tiempo para pensar en eso porque en el piso ves algo imposible, la sombra del árbol ¿¡Se está moviendo?!.</p>
             <br><br><br><br>
            <form class="form-horizontal">
                <div class="form-group">
                <label for="nombre" class="control-label col-sm-2">Nombre:</label>
                    <div class="col-sm-10">
                    <input type="text" id="nombre" class="form-control" placeholder="Ingrese su nombre">
                    </div>
                </div>
                <div class="form-group">
                <label for="pais" class="control-label col-sm-2">País:</label>
                    <div class="col-sm-10">
                    <input type="text" id="pais" name="pais" class="form-control" placeholder="Ingrese su país">
                    </div>
                </div>
                <div class="form-group">
                <label for="mail" class="control-label col-sm-2">Mail:</label>
                    <div class="col-sm-10">
                    <input type="email" id="mail" name="mail" class="form-control" placeholder="Ingrese su email">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                    <input type="submit" value="Enviar" class="btn btn-primary btn-block">
                </div>
                </div>
            </form>
        `);
    }
});

main.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'op2') {
        changeContent(`
            <h1 class="text-primary">hacia la luz</h1>
            <h2 class="text-info">escenario 5</h2>
            <img src="multimedia/escenario5.jpg" alt="luz" id="img" class="img-responsive center-block" style="max-height: 400px;">
            <p>Si es de verdad la sombra lo que se mueve, estar bajo la luz del sol debería ayudar. Es fácil desprenderse de la sombra y apenas hacerlo corres hacia la luz del sol donde es incapaz de acercarse, aunque al ver alrededor tuyo todos estaban pasando por algo parecido, gritás advirtiendo a todos sobre la sombra y lo que hiciste para liberarte, algunos se liberan pero parece que otros están muy consumidos o solo en shock, ¿Acaso hay algo que puedas hacer para ayudarlos? ¿Qué pasaría si te vuelve a atrapar y esta vez no podes escapar?.</p>
            <div class="col-xs-6">
                <button id="C5op1" class="btn btn-primary btn-block">Escapar</button>
            </div>
            <div class="col-xs-6">
                 <button id="C5op2" class="btn btn-success btn-block">Revisar tu bolsillo</button>
            </div>
        `);
    }
});

main.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'C5op1') {
        changeContent(`
            <h1 class="text-primary">no hay escape</h1>
            <h2 class="text-info">escenario 6</h2>
            <img src="multimedia/escenario6.jpg" alt="no hay escape" id="img" class="img-responsive center-block" style="max-height: 400px;">
            <p>Es triste, pero esto no es algo con lo que una persona normal podría lidiar. Volvés a tu casa manteniendote en la luz del sol, ¿qué va a pasar por la noche? En las calles había gente pasando por lo mismo, algunos se salvan, otros no tienen tanta suerte, aunque descubriste que la luz artificial también ayuda, eso soluciona el problema de la noche. En el noticiero advierten de mantenerse bajo cualquier tipo de luz mientras descubren todo lo posible de este fenómeno, aunque también mencionan que solo afectó una pequeña parte del país y no todo el mundo. Supongo así se va a tener que vivir hasta encontrar una solución, siempre con una linterna potente y preparado para cualquier corte de luz que pueda pasar, a cierto punto la sombra se esparció demasiado, tal vez teníamos esperanza de destruirla antes cuando todavía no había salido del país.</p>
            <br><br><br><br>
            <form class="form-horizontal">
                <div class="form-group">
                <label for="nombre" class="control-label col-sm-2">Nombre:</label>
                    <div class="col-sm-10">
                    <input type="text" id="nombre" class="form-control" placeholder="Ingrese su nombre">
                    </div>
                </div>
                <div class="form-group">
                <label for="pais" class="control-label col-sm-2">País:</label>
                    <div class="col-sm-10">
                    <input type="text" id="pais" name="pais" class="form-control" placeholder="Ingrese su país">
                    </div>
                </div>
                <div class="form-group">
                <label for="mail" class="control-label col-sm-2">Mail:</label>
                    <div class="col-sm-10">
                    <input type="email" id="mail" name="mail" class="form-control" placeholder="Ingrese su email">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                    <input type="submit" value="Enviar" class="btn btn-primary btn-block">
                </div>
                </div>
            </form>
        `);
    }
});

main.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'C5op2') {
        changeContent(`
            <h1 class="text-primary">el fin?</h1>
            <h2 class="text-info">escenario 7</h2>
            <img src="multimedia/escenario7.jpg" alt="linterna" id="img" class="img-responsive center-block" style="max-height: 400px;">
            <p>Al revisar tu bolsillo solo encontrás tu celular, pero tal vez eso sea todo lo que necesites. Encendes la linterna de tu celular y te fijas desde lejos si tiene algún efecto en lo que sea esa sombra, al apuntar la linterna hacia la oscuridad desaparece, y cuando dejas de apuntar solo se ve la sombra normal, tiene que estar funcionando de alguna manera, corres hacia las personas que están siendo consumidas y las liberas con la luz, algunos deciden hacer lo mismo y ayudar otras personas y los que ellos ayudaron también ayudan, después de unas horas ya no parece haber más de esa sombra, y mientras volves a tu casa te preguntas si algo asi paso en todo el mundo, si de verdad pudieron destruirla o si algo similar pueda llegar a pasar y esto solo fue la primera ola, pero aun así esto no es algo con lo que una persona normal podría lidiar.</p>
            <br><br><br><br>
            <form class="form-horizontal">
                <div class="form-group">
                <label for="nombre" class="control-label col-sm-2">Nombre:</label>
                    <div class="col-sm-10">
                    <input type="text" id="nombre" class="form-control" placeholder="Ingrese su nombre">
                    </div>
                </div>
                <div class="form-group">
                <label for="pais" class="control-label col-sm-2">País:</label>
                    <div class="col-sm-10">
                    <input type="text" id="pais" name="pais" class="form-control" placeholder="Ingrese su país">
                    </div>
                </div>
                <div class="form-group">
                <label for="mail" class="control-label col-sm-2">Mail:</label>
                    <div class="col-sm-10">
                    <input type="email" id="mail" name="mail" class="form-control" placeholder="Ingrese su email">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                    <input type="submit" value="Enviar" class="btn btn-primary btn-block">
                </div>
                </div>
            </form>
        `);
    }
});