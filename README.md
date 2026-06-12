Part_B_API_Automation
This part is using postman/newman
Installation
1. Install Node.js
https://nodejs.org

2. Install newman and html report
npm install -g newman
npm install -g newman-reporter-html

3. How to Run Tests
using CMD, write the fllowing:
cd C:\Users\Myar\Desktop\EasyLinkMD-QA-Assessment\Part_B_API_Automation      //after downloading EasyLinkMD-QA-Assessment, put it on desktop and edit path depending on your desktop  user name //
newman run collection.json -e environment.json    //without HTML report
newman run collection.json -e environment.json -r cli,html --reporter-html-export reports/report.html  //with HTML report will be generated in the same folder
newman run collection.json -e environment.json -d data.json -r cli,html --reporter-html-export reports/report.html  // same above also depending on the outsorce data file

CI integration file .github/workflows/api-tests.yml
make any push on the project then navigate to github actions
=============================================================================================================================================
Part_C_UI_Automation
This part is using Cypress POM based
1. Install Node.js
https://nodejs.org
2. Clone project from github folder Part_C_UI_Automation/project 1
3. open cmd and execute cd <project-folder>
4. npm install
5. npx cypress run     "it will run all tests in silent mode"   after test is done you can show videos in cypress/videos folder
6. npx cypress open    "it will open cypress and show you test step by step"
7. HTML report here .\Part_C_UI_Automation\project1\cypress\reports\html     "it will be generated every time you run the test"
=============================================================================================================================================











git add .  
git commit -m "push b create"
git push origin main   