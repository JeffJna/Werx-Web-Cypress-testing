/// <reference types="cypress" />
const data = require("../fixtures/data.json");

beforeEach(() => {
  cy.visit("");
});

context("Cadastro nova oferta", () => {
  it("Deve cadastrar nova oferta com sucesso", () => {
    cy.login(data.cpf, data.senha);
    cy.wait(3000);
    cy.novaOferta();
  });
});
