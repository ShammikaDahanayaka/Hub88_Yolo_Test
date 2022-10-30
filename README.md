# Hub88_Yolo_Test

How To Run ==> Hub88_Yolo_Test

Step 1:

Install NodeJs, https://nodejs.org/en/download/
Make dir called "Hub88_Yolo_Test" in C:\ drive - Get into the folder
Install Protractor globally with command: npm install -g protractor
Update web driver with command - webdriver-manager update
(If needed, start the command webdriver-manager start then open this local URL http://localhost:4444/wd/hub in browser to make sure protractor up and running)

Step 2:

Clone / download from git https://github.com/ShammikaDahanayaka/Hub88_Yolo_Test.git

Step 3:

Open a console in project directory and run the command => protractor ./conf.js

Your will notice test are running against the protractortest.org on chrome browser headless mode,
If you need to view in browser opened mode, remove the following headless option form the conf.js

        'chromeOptions': {
            'args':["--headless", "--window-sie=800*600"]
        },
        
Step 4:
To view the allure report on browser, run the command => allure serve .\allure-results\
