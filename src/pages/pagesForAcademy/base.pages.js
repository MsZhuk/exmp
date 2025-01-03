import * as allure from "allure-js-commons";

export class BasePage {
    constructor (page){
        this.page = page;
    }
    async open (){
        await allure.step ("Открыть страницу", async () => {
        await this.page.goto('/');
    });
    }
}
