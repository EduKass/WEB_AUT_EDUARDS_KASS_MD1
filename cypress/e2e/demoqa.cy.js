import { SelectablePage } from "../pageObjects/SelectablePage";
describe("Demoqa scenarios", () => {
    context("MD1", () => {
        beforeEach(() => {
          SelectablePage.visit();
        });
        it.only("Login", () => {
            SelectablePage.selectGrid.click();
            SelectablePage.selectNumber.contains("Two").click();
            SelectablePage.selectNumber.contains("Four").click();
            SelectablePage.selectNumber.contains("Six").click();
            SelectablePage.selectNumber.contains("Eight").click();

            SelectablePage.validateNumberOutput.contains("Two");
            SelectablePage.validateNumberOutput.contains("Four");
            SelectablePage.validateNumberOutput.contains("Six");
            SelectablePage.validateNumberOutput.contains("Eight");

            SelectablePage.validateNumberOutput.contains("One").should('not.exist');
            SelectablePage.validateNumberOutput.contains("Three").should('not.exist');
            SelectablePage.validateNumberOutput.contains("Five").should('not.exist');
            SelectablePage.validateNumberOutput.contains("Seven").should('not.exist');
            SelectablePage.validateNumberOutput.contains("Nine").should('not.exist');
          });
    });
});