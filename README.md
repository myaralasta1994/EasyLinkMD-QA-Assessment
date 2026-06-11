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

CI/CD integration file .github/workflows/api-tests.yml
make any push on the project then navigate to github actions









push part b
git add .  
git commit -m "push b create"
git push origin main   