const formCliente = document.getElementById("formCliente");
const listaClientes = document.getElementById("listaClientes");

formCliente.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${correo}</td>
    `;

    listaClientes.appendChild(fila);

    formCliente.reset();
});