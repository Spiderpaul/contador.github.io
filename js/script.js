import sumarTicketsParaFacturas from "./logica.js";
import borrarIcono from "./borrarIcono.js";

const inputFacturas = document.querySelector("[data-monto]");
const facturas = [];

const ticket = document.querySelector("[data-tickets]");
const tickets = [];
// const tickets = [22, 48, 120, 321, 124, 12, 7, 98, 56, 100, 23, 57, 89, 43, 231];

const btnTicket = document.querySelector("[data-btn-tickets]");
const btnCalcular = document.querySelector("[data-btn-calcular]");

const createTicket = (event) => {
  //event.preventDefault();
  const input = document.querySelector("[data-tickets]");
  const value = input.value;
  const lista = document.querySelector("[data-list]");

  const listaTicket = document.createElement("li");
  listaTicket.classList.add("lista");
  input.value = "";

  const ticketContenido = document.createElement("div");
  const valorTicket = document.createElement("span");
  valorTicket.classList.add("label-ticket");
  valorTicket.innerText = value;
  ticketContenido.classList.add("div-tickets");
  ticketContenido.appendChild(valorTicket);

  listaTicket.appendChild(ticketContenido);
  listaTicket.appendChild(borrarIcono());
  lista.appendChild(listaTicket);
};


btnTicket.addEventListener("click", (event) => {
  event.preventDefault();
  if(ticket.value){
    tickets.push(ticket.value);
    createTicket();
  }
});

btnCalcular.addEventListener("click", (event) => {
  event.preventDefault();
  facturas.push(inputFacturas.value);
  
  if (facturas > 0 && tickets.length > 1) {
    //tickets.sort((a, b) => b - a);
    sumarTicketsParaFacturas(facturas, tickets);
  } else {
    console.log("Diste click en botón calcular");
  }
});
