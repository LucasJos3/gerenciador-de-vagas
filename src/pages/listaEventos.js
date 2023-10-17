import React from "react";

function ListaEventos() {
  //recupera os eventos do LocalStorage
  const eventos = JSON.parse(localStorage.getItem("eventos")) || [];
  return (
    <div>
      <h1>Listagem de Eventos</h1>
      <ul>
        {eventos.map((evento, index) => (
          <li key={index}>
            <strong> placa do veiculo: {evento.placa}</strong>
            <p> Nome proprietario: {evento.prop}</p>
            <p>Numero apartamento: {evento.numeroAP}</p>
            <p>Bloco do Apartamento: {evento.blocoAp}</p>
            <p>Modelo do veiculo: {evento.modeloVeiculo}</p>
            <p>Cor do veiculo: {evento.corVeiculo}</p>
            <p>Numero da vaga: {evento.numeroVaga}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaEventos;
