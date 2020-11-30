var preguntas 
    = {'Pregunta 1':
        ['Respuesta 1', 
         'Respuesta 2', 
         'Respuesta 3'],
       'Pregunta 2':
        ['Respuesta 1', 
         'Respuesta 2', 
         'Respuesta 3'],
       'Pregunta 3':
        ['Respuesta 1', 
         'Respuesta 2', 
         'Respuesta 3'],
       'Pregunta 4':
        ['Respuesta 1', 
         'Respuesta 2', 
         'Respuesta 3'],
       'Pregunta 5':
        ['Respuesta 1', 
         'Respuesta 2', 
         'Respuesta 3'],
       'Pregunta 6':
        ['Respuesta 1', 
         'Respuesta 2', 
         'Respuesta 3'],
       'Pregunta 7':
        ['Respuesta 1', 
         'Respuesta 2', 
         'Respuesta 3'],
       'Pregunta 8':
        ['Respuesta 1', 
         'Respuesta 2', 
         'Respuesta 3'],
       'Pregunta 9':
        ['Respuesta 1', 
         'Respuesta 2', 
         'Respuesta 3'],
       'Pregunta 10':
        ['Respuesta 1', 
         'Respuesta 2', 
         'Respuesta 3']};

var materias_de_fundamentos
    = ['Fundamentos 1',
       'Fundamentos 2',
       'Fundamentos 3',
       'Fundamentos 4',
       'Fundamentos 5',
       'Fundamentos 6',
       'Fundamentos 7',
       'Fundamentos 8',
       'Fundamentos 9',
       'Fundamentos 10',
       'Fundamentos 11',
       'Fundamentos 12',
       'Fundamentos 13',
       'Fundamentos 14',
       'Fundamentos 15'];

var materias_de_tronco_comun
    = ['Tronco Comun 1',
       'Tronco Comun 2',
       'Tronco Comun 3',
       'Tronco Comun 4',
       'Tronco Comun 5',
       'Tronco Comun 6',
       'Tronco Comun 7'];

var materias_de_especialidad
    = {'Desarrollo de Software': 
           ['Desarrollo de Software 1',
            'Desarrollo de Software 2',
            'Desarrollo de Software 3',
            'Desarrollo de Software 4'],
       'Redes': 
           ['Redes 1',
            'Redes 2',
            'Redes 3',
            'Redes 4'],
       'Ciencia de la Computacion': 
           ['Ciencia de la Computacion 1',
            'Ciencia de la Computacion 2',
            'Ciencia de la Computacion 3',
            'Ciencia de la Computacion 4']};

var materias_optativas
    = ['Optativa 1',
       'Optativa 2',
       'Optativa 3',
       'Optativa 4',
       'Optativa 5',
       'Optativa 6',
       'Optativa 7',
       'Optativa 8',
       'Optativa 9',
       'Optativa 10',
       'Optativa 11'];


function espcialidad(segunda) {
    $(`#materias_de_${segunda}especialidad_`).text('');
    var value = $(`#materias_de_${segunda}especialidad`)
                    .children(':selected').attr('value');
    var materias =
        materias_de_especialidad
            [Object.keys(materias_de_especialidad)
                [value]];

    if(segunda == '') {
        $(`#materias_de_segunda_especialidad option[value=${value}]`).remove();
        $('#materias_de_segunda_especialidad').change();
    }

    for(materia of materias) {
        $(`#materias_de_${segunda}especialidad_`).append(
            `
            <li>${materia}</li>
            `);
    }
}

function mode(arr) {
    return arr.sort((a,b) =>
          arr.filter(v => v === a).length
        - arr.filter(v => v === b).length
    ).pop();
}

function removeItem(arr, item) {
    return arr.filter(i => i !== item);
}

$(document).ready(()=> {

    i = 0;
    for(pregunta in preguntas) {
        $('#preguntas').append(
            `
            <label for="pregunta_${i}">${pregunta}</label><br>
            `);
        j = 0;
        for(respuesta of preguntas[pregunta]) {
            $('#preguntas').append(
                `
                <label for="respuesta_${i}" 
                       class="label_1">
                    ${respuesta}
                </label>
                <input type="radio" 
                       name="respuesta_${i}" 
                       id="respuesta_${i}" 
                       value="${j++}">
                `);
        }
        $('#preguntas').append('<br><br>');
        i++;
    }

    for(materia of materias_de_fundamentos) {
        $('#materias_de_fundamentos').append(
            `
            <li>${materia}</li>
            `);
    }

    i = 0;
    for(materia of materias_de_tronco_comun) {
        $('#materias_de_tronco_comun').append(
            `
            <li>
                <input type="checkbox" 
                       value="${i}"
                       name="materias_de_tronco_comun"
                       checked>
                    ${materia}
                </input>
            </li>
            `);
        i++;
    }

    i = 0;
    for(materia in materias_de_especialidad) {
        $('#materias_de_especialidad').append(
            `
            <option value="${i}">${materia}</option>
            `);
        // $('#materias_de_segunda_especialidad').append(
        //     `
        //     <option value="${i}">${materia}</option>
        //     `);
        i++;
    }

    // i = 0;
    // for(materia of materias_optativas) {
    //     $('#materias_optativas').append(
    //         `
    //         <li>
    //             <input type="checkbox" 
    //                    value="${i}"
    //                    class="optativas">
    //                 ${materia}
    //             </input>
    //         </li>
    //         `);
    //     i++;
    // }


    for (var i = 0; i <  4; i++) {
        $('#materias_optativas').append(
            `
            <li>
                <input type="checkbox" 
                       value="${i}"
                       class="optativas_0"
                       checked>
                    ${materias_optativas[i]}
                </input>
            </li>
            `);
    }

    for (var i = 4; i < 8; i++) {
        if(i == 7)
            $('#materias_optativas').append(
                `
                <li>
                    <input type="checkbox" 
                           value="${i}"
                           class="optativas_1 optativas_2">
                        ${materias_optativas[i]}
                    </input>
                </li>
                `);
        else    
            $('#materias_optativas').append(
                `
                <li>
                    <input type="checkbox" 
                           value="${i}"
                           class="optativas_1">
                        ${materias_optativas[i]}
                    </input>
                </li>
                `);
    }

    for (var i = 8; i < 11; i++) {
        $('#materias_optativas').append(
            `
            <li>
                <input type="checkbox" 
                       value="${i}"
                       class="optativas_2">
                    ${materias_optativas[i]}
                </input>
            </li>
            `);
    }



    $('#materias_de_especialidad').change(()=> {
        $('#materias_de_segunda_especialidad').text('');
        i = 0;
        for(materia in materias_de_especialidad) {
            // $('#materias_de_especialidad').append(
            //     `
            //     <option value="${i}">${materia}</option>
            //     `);
            $('#materias_de_segunda_especialidad').append(
                `
                <option value="${i}">${materia}</option>
                `);
            i++;
        }
        espcialidad('');
    }).change();

    $('#materias_de_segunda_especialidad').change(()=> {
        espcialidad('segunda_');
    }).change();
 
    $('#inferencia').change(()=> {
        var respuestas = [];        
        for(i = 0; i < 5; i++) {
            respuestas
                .push(
                    parseInt($(`input[name='respuesta_${i}']:checked`)
                        .val()));
         }

        var respuestas1 = [];
        for(i = 5; i < 10; i++) {
            respuestas1
                .push(
                    parseInt($(`input[name='respuesta_${i}']:checked`)
                        .val()));
         }
  
        //console.log(respuestas);

        mode_ = mode(respuestas);
        //console.log(mode_);
        mode_1 = mode(removeItem(respuestas, mode_));
        //console.log(mode_1);

        $(`#materias_de_especialidad option[value=${mode_}]`)
            .attr("selected", "selected").change();
        $(`#materias_de_segunda_especialidad option[value=${mode_1}]`)
            .attr("selected", "selected").change();

  
        //console.log(respuestas1);
        mode_2 = mode(respuestas1);
        //console.log(mode_2);

        $(`.optativas_0`).prop('checked', false);
        $(`.optativas_1`).prop('checked', false);
        $(`.optativas_2`).prop('checked', false);

        $(`.optativas_${mode_2}`).prop('checked', true);
    });
 
    $('#programa_de_estudios').change(()=> {
        var tronco_comun 
            = $('input[name=materias_de_tronco_comun]:checked').length;
        if(tronco_comun <= 3) {
            $('#segunda').css('display', 'initial');     
        } else {
            $('#segunda').css('display', 'none');     
        }

        optativas = materias_de_tronco_comun.length - tronco_comun;

        $('#optativas').text('');
        $('#optativas')
            .append(`${optativas} optativa(s) mas por ${optativas} de tronco comun`);
        if(optativas == 4)
            $('#optativas')
            .append(' o segunda especialidad');
        else if(optativas > 4)
            $('#optativas')
            .append(` o segunda especialidad y  ${optativas - 4} optativa(s)`);
    });

    $('#inferencia').submit((e)=> {
        e.preventDefault();
        $('#inferencia').css('display', 'none');
        $('#programa_de_estudios').css('display', 'block');
    });

    $('#programa_de_estudios').submit((e)=> {
        e.preventDefault();
        $('#inferencia').css('display', 'block');
        $('#programa_de_estudios').css('display', 'none');
    });

});