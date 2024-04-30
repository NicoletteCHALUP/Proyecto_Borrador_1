import  {obtenerPuntaje,calcularPuntaje} from "./totalizador.js";

describe("Totalizador", () => {

  /*it("debería devolver la cantidad introducida", () => {
    
    expect(calcularPuntaje(10)).toEqual(10);
  });
  */
  it("debería sumar el todas los datos correctamente ", () => {
    calcularPuntaje(10, 20, 30, 40);
    expect(obtenerPuntaje()).toEqual(100);
  });
 
});

