//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
const inputPrice = document.getElementById("input_price");
const priceValue = inputPrice.value;


const inputDiscount = document.getElementById("input_discount")
const discountValue = inputDiscount.value;

const precioConDescuento = calcularPrecioConDescuento (priceValue, discountValue);

const resultPrice = document.getElementById("result_price");

resultPrice.innerText = "El precio con descuento es: $" + precioConDescuento
}


//console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
//});

