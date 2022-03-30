function descuentoPrecio(precio,porcentaje){
    return precio * (100 - porcentaje) / 100;
}
const coupons = [
  "JuanDC_es_Batman",
  "pero_no_le_digas_a_nadie",
  "es_un_secreto",
];
function onClickButtonPriceDiscount(){
    const InputPrice = document.getElementById("InputPrice").value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    let descuento;
    if (!coupons.includes(couponValue)) {
      alert("El cupón " + couponValue + " no es válido");
   } else if (couponValue === "JuanDC_es_Batman") {
      descuento = 15;
   } else if (couponValue === "pero_no_le_digas_a_nadie") {
      descuento = 30;
   } else if (couponValue === "es_un_secreto") {
      descuento = 25;
   }
    const precioConDescuento = descuentoPrecio(InputPrice,descuento);

    const resultP = document.getElementById("resultado");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;

}




