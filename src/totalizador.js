let puntaje = 0;

function calcularPuntaje(cantidad,cantidadPruebas, cantidadLineas, cobertura) {
    
   puntaje = cantidad + cantidadPruebas + cantidadLineas + cobertura;
}
function obtenerPuntaje() {
  return puntaje;
}
export { calcularPuntaje, obtenerPuntaje };