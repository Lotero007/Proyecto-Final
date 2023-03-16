let prome,vp,pa,nmc;

prome=parseFloat(prompt("Ingrese el promedio obtenido en el ultimo periodo"));
vp=parseFloat(prompt("Ingrese el pago total de la colegiatura"));

if (prome >= 9) {
    pa=vp*0.30;
    document.write(`El total a pagar con el descuento es: ${pa} $`);
} else {
    pa=(vp*0.10)+vp;
    document.write(`No se le aplicara descuento, el total a pagar es: ${pa} $`);
}