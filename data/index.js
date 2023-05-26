const form = document.forms.formulario;

//DOM
let inputs = document.getElementsByTagName('input')
let select = document.getElementsByTagName('select')[0];
let resetBtn = document.getElementById('reset');
let submitBtn = document.getElementById('submit');
let totalPago = document.getElementById('totalPago')

//Datos
const precioTicket = 200;
const categorias = [
    {
        id: 'A',
        descuento: 80
    },
    {
        id: 'B',
        descuento: 50
    },
    {
        id: 'C',
        descuento: 15
    }
]

export {
    form,
    inputs,
    select,
    resetBtn,
    submitBtn,
    precioTicket,
    categorias,
    totalPago
}