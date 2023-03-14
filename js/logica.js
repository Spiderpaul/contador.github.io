function sumarTicketsParaFacturas(facturas, tickets) {
  const indicesTicketsPorFactura = [];

  for (const factura of facturas) {
    let sumaTickets = 0;
    let indicesTickets = [];

    for (let i = 0; i < Math.pow(2, tickets.length); i++) {
      let suma = 0;
      let indices = [];

      for (let j = 0; j < tickets.length; j++) {
        if (i & (1 << j)) {
          suma += parseInt(tickets[j]);
          indices.push(j);
        }
      }
      
      if (suma === factura) {
        indicesTickets = indices;
        console.log(`La suma es de: ${suma}`);
        break;
      }

      if (suma > sumaTickets && suma <= factura) {
        indicesTickets = indices;
        sumaTickets = suma;
      }
    }

    indicesTicketsPorFactura.push(indicesTickets);
  }

  for (let i = 0; i < indicesTicketsPorFactura.length; i++) {
    let suma = 0;
    const resultado = document.querySelector("[data-resultado]");
    const resultadoCabecera = document.querySelector("[data-resultado-cabecera]");
    const resultadoMonto = document.createElement("h3");

    resultadoMonto.classList.add("resultado-monto");
    resultadoCabecera.appendChild(resultadoMonto);
    
    resultadoMonto.innerHTML = `Monto $${facturas[i]}`;
    
    for (let j = 0; j < indicesTicketsPorFactura[i].length; j++) {
      const resultadoContenedor = document.querySelector("[data-resultado-lista]");
      const resultadoLista = document.createElement("div");
      const resultadoElemento = document.createElement("h4");

      resultadoLista.classList.add("resultado-lista");
      resultadoElemento.classList.add("resultado-elemento");

      resultadoLista.appendChild(resultadoElemento);
      resultadoContenedor.appendChild(resultadoLista);

      resultadoElemento.innerHTML = `$${tickets[indicesTicketsPorFactura[i][j]]}`

      suma += parseFloat(tickets[indicesTicketsPorFactura[i][j]]);
    }

    const total = document.querySelector("[data-total]");
    const totalElemento = document.createElement("h4");

    totalElemento.classList.add("total-elemento");
    
    total.appendChild(totalElemento);
    resultado.appendChild(total);

    totalElemento.innerHTML = `Total $${suma}`;
  }
}



  export default sumarTicketsParaFacturas;