const formCliente = document.getElementById("formCliente");
const listaClientes = document.getElementById("listaClientes");

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

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${correo}</td>
        <td>${fecha}</td>
    `;

    listaClientes.appendChild(fila);

    formCliente.reset();

    alert("Cliente registrado correctamente.");
});