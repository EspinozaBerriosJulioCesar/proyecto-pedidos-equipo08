const formProducto = document.getElementById("formProducto");
const listaProductos = document.getElementById("listaProductos");

formProducto.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const precio = document.getElementById("precio").value;

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${categoria}</td>
        <td>S/ ${parseFloat(precio).toFixed(2)}</td>
    `;

    listaProductos.appendChild(fila);

    formProducto.reset();
});