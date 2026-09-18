const formProducto = document.getElementById("formProducto");
const listaProductos = document.getElementById("listaProductos");
const buscarProducto = document.getElementById("buscarProducto");
let filaEditando = null;

formProducto.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const categoria = document.getElementById("categoria").value.trim();
    const precio = Number(document.getElementById("precio").value);
    const fecha = new Date().toLocaleString("es-PE");

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

    if (filaEditando) {
        filaEditando.cells[0].textContent = nombre;
        filaEditando.cells[1].textContent = categoria;
        filaEditando.cells[2].textContent = `S/ ${precio.toFixed(2)}`;

        filaEditando = null;

        formProducto.reset();

        document.querySelector('#formProducto button[type="submit"]').textContent = "Registrar Producto";

        alert("Producto actualizado correctamente.");
        return;
    }

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${categoria}</td>
        <td>S/ ${precio.toFixed(2)}</td>
        <td>${fecha}</td>
        <td>
            <button type="button" class="btn-editar">Editar</button>
            <button type="button" class="btn-eliminar">Eliminar</button>
        </td>
    `;

    listaProductos.appendChild(fila);
    fila.querySelector(".btn-editar").addEventListener("click", function() {
        filaEditando = fila;

        document.getElementById("nombre").value = fila.cells[0].textContent;
        document.getElementById("categoria").value = fila.cells[1].textContent;
        document.getElementById("precio").value = fila.cells[2].textContent.replace("S/ ", "");

        document.querySelector('#formProducto button[type="submit"]').textContent = "Actualizar Producto";
    });

        fila.querySelector(".btn-eliminar").addEventListener("click", function() {
            const confirmar = confirm("¿Está seguro de eliminar este producto?");

            if (confirmar) {
                fila.remove();
                alert("Producto eliminado correctamente.");
            }
    });


    formProducto.reset();

    alert("Producto registrado correctamente.");
});

    buscarProducto.addEventListener("input", function() {
        const texto = buscarProducto.value.toLowerCase();

        const filas = listaProductos.querySelectorAll("tr");

        filas.forEach(function(fila) {
            const nombre = fila.cells[0].textContent.toLowerCase();
            const categoria = fila.cells[1].textContent.toLowerCase();

            if (nombre.includes(texto) || categoria.includes(texto)) {
                fila.style.display = "";
            } else {
                fila.style.display = "none";
            }
        });
});