const formProducto = document.getElementById("formProducto");
const listaProductos = document.getElementById("listaProductos");

formProducto.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const categoria = document.getElementById("categoria").value.trim();
    const precio = Number(document.getElementById("precio").value);

    if (nombre === "") {
        alert("Ingrese el nombre del producto.");
        return;
    }

    if (categoria === "") {
        alert("Ingrese la categoría del producto.");
        return;
    }

    if (!Number.isFinite(precio) || precio <= 0) {
        alert("El precio debe ser un número mayor que 0.");
        return;
    }

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${categoria}</td>
        <td>S/ ${precio.toFixed(2)}</td>
    `;

    listaProductos.appendChild(fila);

    formProducto.reset();

    alert("Producto registrado correctamente.");
});