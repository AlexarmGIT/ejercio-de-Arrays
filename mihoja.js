const motos = [];

    let marca = prompt("ingrese la marca de su moto");
    let cilindrada = prompt("ingrese la cilindrada (solo los numeros)");
    let precio = prompt ("ingrese el precio de que desea vender");

motos.push({marca: marca, cilindrada:cilindrada, precio:precio} );

let cargarVenta =prompt ("desea cargar los datos para vender? SI/NO")

if (cargarVenta ==="SI"|| "si"){
    let carga = motos.forEach(e => alert("Su moto publicada es una "+ e.marca + " posee una cilindrada de "+e.cilindrada+ "C.C."+ " y su valor de venta sera  "+
    e.precio));
}
else{
    alert("los datos no se guardaron ingrese nuevamente");
}