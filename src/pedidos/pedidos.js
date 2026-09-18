const pedidoForm = document.getElementById("pedidoForm");
const listaPedidos = document.getElementById("listaPedidos");
let filaEditando = null;
const buscarPedido = document.getElementById("buscarPedido");

pedidoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const cliente = document.getElementById("cliente").value.trim();
    const producto = document.getElementById("producto").value.trim();
    const cantidad = Number(document.getElementById("cantidad").value);
    const fecha = new Date().toLocaleString("es-PE");

    
    if (cliente === "") {
        alert("Ingrese el nombre del cliente.");
        return;
    }

    
    if (producto === "") {
        alert("Ingrese el nombre del producto.");
        return;
    }

    
    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        alert("La cantidad debe ser un número entero mayor que 0.");
        return;
    }

    if (filaEditando) {
        filaEditando.cells[0].textContent = cliente;
        filaEditando.cells[1].textContent = producto;
        filaEditando.cells[2].textContent = cantidad;

        filaEditando = null;

        pedidoForm.reset();

        document.getElementById("btnPedido").textContent = "Registrar Pedido";

        alert("Pedido actualizado correctamente.");
        return;
}

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${cliente}</td>
        <td>${producto}</td>
        <td>${cantidad}</td>
        <td>${fecha}</td>
        <td>
            <button type="button" class="btn-editar">Editar</button>
            <button type="button" class="btn-eliminar">Eliminar</button>
        </td>

    `;

    listaPedidos.appendChild(fila);
    
    fila.querySelector(".btn-editar").addEventListener("click", function() {
        filaEditando = fila;

    document.getElementById("cliente").value = fila.cells[0].textContent;
    document.getElementById("producto").value = fila.cells[1].textContent;
    document.getElementById("cantidad").value = fila.cells[2].textContent;

    document.getElementById("btnPedido").textContent = "Actualizar Pedido";
});
    
    fila.querySelector(".btn-eliminar").addEventListener("click", function() {
        const confirmar = confirm("¿Está seguro de eliminar este pedido?");

        if (confirmar) {
            fila.remove();
        }
    });

    pedidoForm.reset();

    alert("Pedido registrado correctamente.");
});

buscarPedido.addEventListener("input", function() {
    const textoBusqueda = buscarPedido.value.toLowerCase().trim();
    const filas = listaPedidos.querySelectorAll("tr");

    filas.forEach(function(fila) {
        const cliente = fila.cells[0].textContent.toLowerCase();
        const producto = fila.cells[1].textContent.toLowerCase();

        if (cliente.includes(textoBusqueda) || producto.includes(textoBusqueda)) {
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    });
});