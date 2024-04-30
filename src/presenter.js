import { calcularPuntaje } from "./totalizador.js";

const form = document.querySelector("#calcular-form");
const tablaDatosBody = document.querySelector("#datos-ingresados-body");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const cantidad = document.querySelector("#cantidad").value;
    const cantidadPruebas = document.querySelector("#cantidad-pruebas").value;
    const cantidadLineas = document.querySelector("#cantidad-lineas").value;
    const cobertura = document.querySelector("#cobertura").value;

    calcularPuntaje(cantidad, cantidadPruebas, cantidadLineas, cobertura);

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${cantidad}</td>
        <td>${cantidadPruebas}</td>
        <td>${cantidadLineas}</td>
        <td>${cobertura}</td>
    `;
    tablaDatosBody.appendChild(newRow);

    form.reset();
});
