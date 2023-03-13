const facturas = [325, 512, 147];
const tickets = [22, 48, 120, 321, 124, 12, 7, 98, 56, 100, 23, 57, 89, 43, 231];

function sumarTicketsParaFacturas(facturas, tickets) {
  const indicesUsados = new Set();
  const indicesTicketsPorFactura = [];

  for (const factura of facturas) {
    let sumaTickets = 0;
    let indicesTickets = [];

    for (let i = 0; i < tickets.length; i++) {
      if (!indicesUsados.has(i) && sumaTickets + tickets[i] <= factura) {
        sumaTickets += tickets[i];
        indicesUsados.add(i);
        indicesTickets.push(i);
      }

      if (sumaTickets === factura) {
        break;
      }
    }

    indicesTicketsPorFactura.push(indicesTickets);
  }

  for (let i = 0; i < indicesTicketsPorFactura.length; i++) {
    console.log(`Factura[${i}]:`);
    for (let j = 0; j < indicesTicketsPorFactura[i].length; j++) {
      console.log(`Ticket[${indicesTicketsPorFactura[i][j]}]`);
    }
  }
}

facturas.sort((a, b) => b - a);
tickets.sort((a, b) => b - a);
console.log(facturas);
console.log(tickets);

sumarTicketsParaFacturas(facturas, tickets);