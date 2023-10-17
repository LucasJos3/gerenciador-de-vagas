import React, { useState } from "react";
import "./CadastroEvento.css";

function CadastroEvento() {
  const [evento, setEvento] = useState({
    placa: "",
    prop: "",
    numeroAP: "",
    blocoAp: "",
    modeloVeiculo: "",
    corVeiculo: "",
    numeroVaga: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEvento({ ...evento, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //validação dos campos para envitar o envio de dados invalidos
    if (
      !evento.placa ||
      !evento.prop ||
      !evento.numeroAP ||
      !evento.blocoAp ||
      !evento.modeloVeiculo ||
      !evento.corVeiculo ||
      !evento.numeroVaga
    ) {
      alert("Preencha todos os campos");
      return;
    }
    //recupera os eventos ja cadastrados no localStorage
    const eventosCadastrados =
      JSON.parse(localStorage.getItem("eventos")) || [];

    //adiciona o novo evento a lista de eventos
    eventosCadastrados.push(evento);

    //atualiza o localStorage com a lista de eventos atualizada
    localStorage.setItem("eventos", JSON.stringify(eventosCadastrados));

    //limpa os campos apos o cadastro
    setEvento({
      placa: "",
      prop: "",
      numeroAP: "",
      blocoAp: "",
      modeloVeiculo: "",
      corVeiculo: "",
      numeroVaga: "",
    });
    alert("evento cadastrado com sucesso");
  };
  return (
    <div>
      <h1>Cadastro de Vagas</h1>
      <form onSubmit={handleSubmit}>
        <label>Placa do veiculo</label>
        <input
          type="text"
          name="placa"
          value={evento.placa}
          onChange={handleInputChange}
        ></input>

        <label>Nome proprietario</label>
        <input
          type="text"
          name="prop"
          value={evento.prop}
          onChange={handleInputChange}
        ></input>

        <label>Numero do apartamento</label>
        <input
          type="text"
          name="numeroAP"
          value={evento.numeroAP}
          onChange={handleInputChange}
        ></input>

        <label>Bloco apartamento</label>
        <input
          type="text"
          name="blocoAp"
          value={evento.blocoAp}
          onChange={handleInputChange}
        ></input>

        <label>Modelo veiculo</label>
        <input
          type="text"
          name="modeloVeiculo"
          value={evento.modeloVeiculo}
          onChange={handleInputChange}
        ></input>

        <label>Cor do veiculo</label>
        <input
          type="text"
          name="corVeiculo"
          value={evento.corVeiculo}
          onChange={handleInputChange}
        ></input>

        <label>Numero da vaga de estacionamento</label>
        <input
          type="text"
          name="numeroVaga"
          value={evento.numeroVaga}
          onChange={handleInputChange}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
export default CadastroEvento;
