let homepage = require('../pages/hub88_HomePage');
var testdata = require('../Testdata/data.json');
let gameProviderPage = require('../pages/hub88_GameProviderPage');
let gameRunningPage = require('../pages/hub88_PlayGamePage');

const EC = protractor.ExpectedConditions;
describe("Hub88 Functional Testing", function () {

    beforeEach(function() {
        // Navigate to hub88 games
        homepage.get(testdata.environment);
      });

    it("Test case 1 : Verify Searching a game type", function () {

        // Validate the page title
        expect(browser.getTitle()).toEqual('Hub88 - Seamless Wallet Integration | single API for casino operations');

        // Enter the game type at search filed
        homepage.enterSearchKey('Nolimit');

        // Check whether only filtered game type is displayed
        homepage.verifySearchedGameTypeIsDisplayed('Nolimit');

        // Click the selected game type
        homepage.clickSearchedGameType('Nolimit City');

    });

    it("Test case 2 : Validate the game is playing for a specific game type", function () {

        // Validate the page title
        expect(browser.getTitle()).toEqual('Hub88 - Seamless Wallet Integration | single API for casino operations');

        // Enter the game type at search filed
        homepage.enterSearchKey('Habanero');

        // Check whether only filtered game type is displayed
        homepage.verifySearchedGameTypeIsDisplayed('Habanero');

        browser.sleep(10000);

        // Click the selected game type and view the games
        homepage.clickSearchedGameType('Habanero');

        browser.sleep(2000);

        // Navigate to the specific game
        gameProviderPage.goToTheGame("Scopa");

        browser.sleep(9000);

        // Verify the selected game is running
        gameRunningPage.validateTheGameIsRunning("Scopa");

    });

});