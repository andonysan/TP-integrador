// function mostrarOcultar(id){
//     console.log(id);
//     let div = document.getElementById(id);
//     if(div.style.display == "none"){
//         div.style.display = "flex";
//     }else{
//         div.style.display = "none";
//     }
// }
const precioT = 200;
const categ = [
    {
        id: 'A',
        descuento: 80
    },
    {
        id: 'B',
        descuento: 40
    },
    {
        id: 'C',
        descuento: 15
    }
]

function precioTotal(){
    let cantidad = document.getElementById("quantity").value;
    let categoria = document.getElementById('category').value;
    let totalPago = document.getElementById('totalPago');

    let searchCatg = categ.find(cat => cat.id === categoria)

    if(searchCatg){
        let descuento = searchCatg.descuento * precioT / 100;
        let precioFinal = (precioT - descuento)*cantidad;
        totalPago.innerText = precioFinal;
    }else{
        let precioFinal = cantidad * precioT;
        totalPago.innerText = precioFinal;
    }
}

