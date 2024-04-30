let puntaje = 0;

function calcularPuntaje(cantidad,cantidadPruebas, cantidadLineas, cobertura) {
    
   // Lógica para calcular el puntaje
   puntaje = (cantidad + cantidadPruebas + cantidadLineas + cobertura) / 4;
   ;
}
function obtenerPuntaje() {
  return puntaje;
}
export { calcularPuntaje, obtenerPuntaje };