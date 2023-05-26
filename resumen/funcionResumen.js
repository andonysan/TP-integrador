import {form, inputs, select, resetBtn, submitBtn, precioTicket, categorias, totalPago} from '../data/index.js';

function reset(e){
    e.preventDefault();
    for(let input of inputs){
    input.value = '';
    }
    select.value = "none";
    totalPago.innerText = '';
    return null;
}

function resumen(e){
    e.preventDefault()
    let category = document.getElementById('category');
    let cant = +document.getElementById('quantity').value || 0;
    let result = categorias.find(categoria => categoria.id === category.value);

    if(result && cant >= 0){
        let precioFinal = precioTicket*cant
        let descuentoF = (precioTicket * cant)*(result.descuento/100);
        totalPago.innerText = precioFinal - descuentoF;

    }else{ 
        totalPago.innerText = precioTicket*cant;
    }
    return null;
}

export {reset, resumen};