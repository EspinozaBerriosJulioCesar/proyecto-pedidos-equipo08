const pedidoForm = document.getElementById("pedidoForm");
const listaPedidos = document.getElementById("listaPedidos");

pedidoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const cliente = document.getElementById("cliente").value;
    const producto = document.getElementById("producto").value;
    const cantidad = document.getElementById("cantidad").value;

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${cliente}</td>
        <td>${producto}</td>
        <td>${cantidad}</td>
    `;

    listaPedidos.appendChild(fila);

    pedidoForm.reset();
});