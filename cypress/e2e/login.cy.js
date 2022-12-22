/// <reference types="cypress" />
const data = require("../fixtures/data.json");

beforeEach(() => {
  cy.visit("");
});

context("Login", () => {
  it("Deve fazer login com sucesso", () => {
    cy.login(data.cpf, data.senha);
    cy.get(".sc-pkUyL").should("contain", "Olá, Commone User");
    cy.log("Login realizado com sucesso!!");
  });

  it("Deve exibir mensagem de alerta ao informar cpf incorreto", () => {
    cy.get(
      ".MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    ).type("14755899645");
    cy.get(".sc-psfJB > .MuiButtonBase-root").click();
    cy.get("#notistack-snackbar").should(
      "contain",
      "Cooperativa não encontrada"
    );
    cy.log("Validação de alerta realizado com sucesso!!");
  });

  it("Deve exibir mensagem de alerta ao informar cpf não cadastrado", () => {
    cy.get(
      ".MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    ).type("08468807680");
    cy.get(".sc-psfJB > .MuiButtonBase-root").click();
    cy.get("#notistack-snackbar").should(
      "contain",
      "Cooperativa não encontrada"
    );
    cy.log("Validação de alerta realizado com sucesso!!");
  });

  it("Deve exibir mensagem de alerta ao informar senha incorreta", () => {
    cy.login(data.cpf, 14587845);
    cy.get("#notistack-snackbar").should(
      "contain",
      "Login não autorizado ou expirado"
    );
    cy.log("Validação de alerta realizado com sucesso!!");
  });
});
