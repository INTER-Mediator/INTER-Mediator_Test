# INTER-Mediator Testing Workbench

Masayuki Nii (nii@msyk.net)

Here is the testing workbench for INTER-Mediator based on [WebdriverIO](https://webdriver.io/).

Before setting up, it requres to install PHP, composer and Node.js, also set up databases (MySQL, PostgreSQL, SQLite).
## Setup
```
composer install
npm install
```

## Testing
Before starting the test, databases should be initialized with each sample schema.
```
npm test
```

## Information

INTER-Mediator: 
[Site](https://inter-mediator.com) /
[Manual](https://inter-mediator.info) /
[Repository](https://github.com/INTER-Mediator/INTER-Mediator)