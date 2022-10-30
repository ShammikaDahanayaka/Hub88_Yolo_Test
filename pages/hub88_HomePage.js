let hub88_HomePage = function () {
    let searchInput = element(by.xpath('//input[@placeholder="Search"]'));
    //let searchedGame = element(by.xpath('//img[@alt='Nolimit City']'));

    var resultGame;
    const EC = protractor.ExpectedConditions;

    this.get = function (url) {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.get(url);
        browser.wait(EC.visibilityOf(searchInput), 10000);
    }

    this.enterSearchKey = function (searchKey) {
        searchInput.sendKeys(searchKey);
    }

    this.clickSearchedGameType = function (gameName) {
        //element(by.xpath('//img[@alt="Habanero"]')).click();
        let searchedGame = element(by.xpath('//img[@alt="'+gameName+'"]/ancestor::a'));
        searchedGame.click();
        element(by.xpath('//img[@alt="'+gameName+'"]/ancestor::a')).click();
    }


    this.verifySearchedGameTypeIsDisplayed = function (outputGameName) {
        resultGame = element.all(by.xpath('//div[contains(text(),"'+outputGameName+'")]'));
        expect(resultGame.count()).toEqual(1);
        //expect(result.getText()).toEqual(output);
    }
}

module.exports = new hub88_HomePage();