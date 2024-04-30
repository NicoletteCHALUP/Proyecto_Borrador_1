import  calcularPuntaje  from "./totalizador.js";

describe("Totalizador", () => {

  it("debería devolver la cantidad introducida", () => {
    
    expect(calcularPuntaje(10)).toEqual(10);
  });
 
});

