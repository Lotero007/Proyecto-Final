let califi1,califi2,califi3,promedio,promround;
califi1=parseInt(prompt("Favor ingresar la calificación uno"));
califi2=parseInt(prompt("Favor ingresar la calificación dos"));
califi3=parseInt(prompt("Favor ingresar la calificación tres"));
promedio=(califi1 + califi2 + califi3) / 3;
promround= Math.round(promedio)
if (promround >= 70){
    document.write(`Su promedio es: ${promround} aprobó`);
}else{
    document.write(`Su promedio es: ${promround} réprobo`);
}