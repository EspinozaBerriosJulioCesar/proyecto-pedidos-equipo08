const formCliente = document.getElementById("formCliente");
const listaClientes = document.getElementById("listaClientes");

let filaEditando = null;

formCliente.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const fecha = new Date().toLocaleString("es-PE");

    if (nombre === "") {
        alert("Ingrese el nombre del cliente.");
        return;
    }

    if (apellido === "") {
        alert("Ingrese el apellido del cliente.");
        return;
    }

    if (correo === "") {
        alert("Ingrese el correo electrónico.");
        return;
    }

    if (filaEditando) {

        filaEditando.cells[0].textContent = nombre;
        filaEditando.cells[1].textContent = apellido;
        filaEditando.cells[2].textContent = correo;

        filaEditando = null;

        formCliente.reset();

        document.getElementById("btnCliente").textContent = "Registrar Cliente";

        alert("Cliente actualizado correctamente.");

        return;
    }

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${correo}</td>
        <td>${fecha}</td>
        <td>
            <button type="button" class="btn-editar">Editar</button>
            <button type="button" class="btn-eliminar">Eliminar</button>
        </td>
    `;

    listaClientes.appendChild(fila);

    fila.querySelector(".btn-editar").addEventListener("click", function() {

        filaEditando = fila;

        document.getElementById("nombre").value = fila.cells[0].textContent;
        document.getElementById("apellido").value = fila.cells[1].textContent;
        document.getElementById("correo").value = fila.cells[2].textContent;

        document.getElementById("btnCliente").textContent = "Actualizar Cliente";
    });

    formCliente.reset();

    fila.querySelector(".btn-eliminar").addEventListener("click", function() {
        const confirmar = confirm("¿Está seguro de eliminar este cliente?");

        if (confirmar) {
            fila.remove();
            alert("Cliente eliminado correctamente.");
        }
    });

    alert("Cliente registrado correctamente.");
});