import  {obtenerPuntaje,calcularPuntaje} from "./totalizador.js";

describe("Totalizador", () => {

  /*it("debería devolver la cantidad introducida", () => {
    
    expect(calcularPuntaje(10)).toEqual(10);
  });
  */
  /*it("debería sumar el todas los datos correctamente ", () => {
    calcularPuntaje(10, 20, 30, 40);
    expect(obtenerPuntaje()).toEqual(100);
  });*/
  it("debería calcular el puntaje correctamente con el criterio basico de sumar y dividir por la cantidad(sera cambiado proximamente por otro criterio)", () => {
    calcularPuntaje(10, 20, 30, 40);
    expect(obtenerPuntaje()).toEqual(25);
  });
});

