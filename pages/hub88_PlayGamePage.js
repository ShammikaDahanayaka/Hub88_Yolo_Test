let hub88_PlayGamePage = function () {

    const EC = protractor.ExpectedConditions;
    let lblGameName = element(by.xpath('//h1')); 


    this.validateTheGameIsRunning = function (gameName) {

        expect(lblGameName.getText()).toEqual(gameName);
        //expect(element(by.xpath('//h1[contains(text(),"'+gameName+'")]')).isPresent()).toBe(true);
    }
}

module.exports = new hub88_PlayGamePage();