import { BasePage } from "./BasePage";

export class SelectablePage extends BasePage {
    static get url() {
      return "/selectable";
    }

    static get selectGrid(){
      return cy.get('[id="demo-tab-grid"]');
    }
    static get selectNumber(){
      return cy.get('[class="list-group-item list-group-item-action"]');
    }
    static get validateNumberOutput(){
      return cy.get('[class="list-group-item active list-group-item-action"]');
    }
}
