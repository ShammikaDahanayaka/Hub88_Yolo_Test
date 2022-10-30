let hub88_GameProviderPage = function () {
    let searchInput = element(by.xpath('//input[@placeholder="Search"]'));
    let btnLoadMore = element(by.xpath('//button[contains(text(),"Load more")]'));
    let linkGameImg = element(by.xpath('//h2[contains(text(),"Scopa")]//ancestor::a'));
    let lblGameName = element(by.xpath('//h1'));

    const EC = protractor.ExpectedConditions;


    this.enterSearchGame= function (searchKey) {
        browser.wait(EC.visibilityOf(searchInput), 10000);
        searchInput.sendKeys(searchKey);
    }



    this.verifySearchedGameIsDisplayed = function (outputGameName) {
        var resultGame = element.all(by.xpath('//*[contains(text(),"'+outputGameName+'")]'));
        expect(resultGame.count()).toEqual(1);
        //expect(result.getText()).toEqual(output);
    }

    this.goToTheGame = function (gameName) {
        var game = element.all(by.xpath('//h2[contains(text(),"Scopa")]//ancestor::a'));
        //browser.wait(EC.visibilityOf(game), 20000);
        //element(by.xpath('//h2[contains(text(),"Scopa")]//ancestor::a')).click();
        
       /*if(element(by.xpath('//h2[contains(text(),"'+gameName+'")]//ancestor::a')).isPresent = true){
        element(by.xpath('//h2[contains(text(),"Scopa")]//ancestor::a')).click();
       }else{
        element(by.xpath('//h2[contains(text(),"Scopa")]//ancestor::a')).click();
       }*/
       element(by.xpath('//h2[contains(text(),"Scopa")]//ancestor::a')).click();

       
    }


    this.clickButtonLoadMore = function () {

        while (btnLoadMore.isPresent())  
            {  
                btnLoadMore.click();
            }  
    }

    this.validateTheGameIsRunning = function (gameName) {

        expect(lblGameName.getText()).toEqual(gameName);
        //expect(element(by.xpath('//h1[contains(text(),"'+gameName+'")]')).isPresent()).toBe(true);
    }
}

module.exports = new hub88_GameProviderPage();