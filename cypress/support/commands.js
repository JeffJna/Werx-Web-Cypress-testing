//Comando para login
Cypress.Commands.add("login", (cpf, senha) => {
  cy.get(
    ".MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
  ).type(cpf);
  cy.get(".sc-psfJB > .MuiButtonBase-root").click();
  cy.get(
    ":nth-child(3) > .sc-pzYib > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
  ).type(senha);
  cy.get(".MuiButton-label > .MuiTypography-root").click();
});

Cypress.Commands.add("novaOferta", (cpf, senha) => {
  cy.get(".MuiButton-label").click();
  cy.get("#mui-component-select-type").click();
  cy.get('[data-value="COMPRA"]').click();
  cy.get("#mui-component-select-product_id").click();
  cy.get('.MuiList-root > [tabindex="0"]').click();
  cy.get("#mui-component-select-modality_id").click();
  cy.get('[data-value="0e3f84c8-7f87-478c-be6b-638d14f60fae"]').click();
  cy.get(
    ":nth-child(3) > :nth-child(1) > .sc-pzYib > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
  ).type(Math.floor(Math.random() * 30000));
  cy.get("#mui-component-select-unit_of_measurement_id").click();
  cy.get(".MuiList-root > .MuiButtonBase-root").click();
  cy.get(
    ":nth-child(4) > :nth-child(1) > .sc-pzYib > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
  ).type(Math.floor(Math.random() * (10 - 1) + 1));
  cy.get(
    ":nth-child(2) > .sc-pzYib > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
  ).type(Math.floor(Math.random() * (999 - 11) + 11));
  cy.get("#mui-component-select-harvest_id").click();
  cy.get('[data-value="fc04585c-f23c-451c-8a22-c7b36aab886f"]').click();
  cy.get(
    ':nth-child(2) > [style="width: 100%;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
  ).click();
  cy.get(".MuiDialogActions-root > :nth-child(2) > .MuiButton-label").click();
  cy.get(
    ':nth-child(3) > [style="width: 100%;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
  ).click();
  cy.get(".MuiDialogActions-root > :nth-child(2) > .MuiButton-label").click();
  cy.get(
    '[style="margin-top: 10px; margin-bottom: 8px; width: 100%;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
  ).click();
  cy.get(".MuiDialogActions-root > :nth-child(2) > .MuiButton-label").click();
  cy.get("#mui-component-select-payment_type").click();
  cy.contains("Dinheiro").click();
  cy.get("#mui-component-select-shipping").click();
  cy.get(".MuiList-root > :nth-child(2)").click();
  cy.get("#mui-component-select-delivery_place").click();
  cy.get('.MuiList-root > [tabindex="-1"]').click();
  cy.get(
    '[style="margin-top: 10px; padding-bottom: 8px;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
  ).click();
  cy.get(
    ":nth-child(5) > :nth-child(7) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root"
  ).click();
  cy.get(".MuiDialogActions-root > :nth-child(2) > .MuiButton-label").click();
  cy.get(
    '[style="margin-top: 10px; padding-bottom: 8px;"] > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
  ).click();
  cy.get(".MuiDialogActions-root > :nth-child(2) > .MuiButton-label").click();
  cy.get('[rows="5"]').type(
    "Olá este é o teste automatizado utilizando cypress"
  );
  cy.get(".MuiButton-label").click();
  cy.get("#notistack-snackbar").should("contain", "Oferta criada com sucesso!");
  cy.get("#mui-component-select-state").click();
  cy.get('[data-value="160c1fdd-f13b-4f37-b45d-de8a61631435"]').click();
  cy.get(":nth-child(1) > .MuiListItemText-root > .MuiTypography-root").click();
  cy.get(".MuiButton-label").click();
  cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click();
});
