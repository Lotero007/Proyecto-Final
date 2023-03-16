let Dit,Dh,ip;
Dh=parseFloat(prompt("Ingrese el valor de dinero por concepto de hipoteca"));
Dit=parseFloat(prompt("Ingrese el valor de la inversión total para iniciar el negrocio"));
if (Dh < 1000000) {
    ip=Dit/2;
    document.write(`La inversión de cada socio es de: ${ip} $`);
} else {
    ip=(Dit-Dh)/2;
    document.write(`La inversión de cada socio es de: ${ip} $`);
}
