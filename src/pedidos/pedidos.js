const pedidoForm = document.getElementById("pedidoForm");
const listaPedidos = document.getElementById("listaPedidos");

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

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${cliente}</td>
        <td>${producto}</td>
        <td>${cantidad}</td>
        <td>${fecha}</td>
        <td>
            <button type="button" class="btn-eliminar">Eliminar</button>
        </td>

    `;

    listaPedidos.appendChild(fila);
    
    fila.querySelector(".btn-eliminar").addEventListener("click", function() {
        const confirmar = confirm("¿Está seguro de eliminar este pedido?");

        if (confirmar) {
            fila.remove();
        }
    });

    pedidoForm.reset();

    alert("Pedido registrado correctamente.");
});