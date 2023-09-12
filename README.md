# project-object-relational-mapping-challenge-back-end-e-commerce-module-orm
 back end for an e-commerce site, featuring a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

 ![License](https://img.shields.io/badge/license-MIT-pink.svg?style=for-the-badge)

## Description

A back-end for an e-commerce platform using Express.js API, Sequelize, and MySQL. Using Express.js, for route handling. Using Sequelize, a promise-based ORM ('Object Relational Mapper') for database management with MySql. Using MySQL, as the preferred database system for storing essential e-commerce data. Using Insominia for testing to ensure each API route responds as necessary. The API supports CRUD operations on product categories, products, and tags. I was provided with starter code (I have provided a screen shot and a link to the starter code.)

Users can easily fetch e-commerce data in a formatted JSON via GET routes for categories, products, or tags. API supports POST (data creation), PUT (data update), and DELETE (data removal) operations, allowing users to have full control over their e-commerce data. Begining this project, I had to make sure I had all correct dependencies installed by using the command npm install. For security, there is an '.env' configuration, allowing users to securely connect to their databases.

## Table of Contents

:bookmark_tabs:

- [Installation](#installation)
- [Links](#links)
- [School Instructions](#school-instructions)
- [Dependencies](#dependencies)
- [Insomnia](#insomnia)
- [Dotenv](#dotenv)
- [ORM](#orm)
- [mysql](#mysql)
- [mysql2](#mysql2)
- [sequelize](#sequelize)
- [MISC](#misc)
- [JawsDB](#jawsdb)
- [bcrypt](#bcrypt)
- [eslint](#eslint)
- [Random Notes](#random-notes)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Credits](#credits)
- [Badges](#badges)
- [Tests](#tests)
- [Features](#features)

## Installation

:arrow_down:

Start application:

Run with command;
npm start

Seed Database: (Optional)
If you want to populate the database with sample data, run the command:

npm run seed

When running this command, it will:

- Connect to database using Sequelize.
- Run seed files (which insert data into database tables)
- Close connection after seeding.

The seed file uses Sequelizes method '.bulkCreate()', to insert multiple records into database.

:arrow_forward: [Starter Code Link: Click Me To Go To Link](https://github.com/coding-boot-camp/fantastic-umbrella)

:arrow_forward: [Github Link : Click Me To Go To Link](https://github.com/pmastropolo/project-object-relational-mapping-challenge-back-end-e-commerce-module-orm/tree/main)

:arrow_forward: [Youtube Video : Click Me To Go To Link]

## Links

:open_file_folder:

:arrow_forward: Starter Code Link: https://github.com/coding-boot-camp/fantastic-umbrella

:arrow_forward: Github link: https://github.com/pmastropolo/project-object-relational-mapping-challenge-back-end-e-commerce-module-orm/tree/main

:arrow_forward: Youtube Video:

## School Instructions

![Assosiations](images/assosiations.jpg)
![Database Modules](images/databasemodules.jpg)
![Database Modules 2](images/databasemodules222.jpg)
![Getting Started](<images/getting started.jpg>)
![Mock up Screenshot 1](images/mockup.jpg)
![Mock Up Screenshot 2](images/mockup2.jpg)
![orm](images/orm.jpg)
![orm 2](images/orm2222.jpg)
![Starter Code Image](images/startercodeimagescreenshot.jpg)
![User Story](images/userstory.jpg)
![Tools For This Week](<images/TOOLS FOR THIS WEEK.jpg>)

## Dependencies

- Express.js
npm install express

- Sequelize
npm install sequelize

- MySQL2
npm install mysql2

- dotenv
npm install dotenv

Want to install all at once?
npm install express sequelize mysql2 dotenv

## Insomnia

Using Insomnia for testing:

1. Download and install Insomnia at there website:
[insomnia](https://insomnia.rest/)

2. Create a new request:
Click on new request
Name Request
Select the appropriate HTTP method (GET, POST, PUT, DELETE, etc.).
Input your API endpoint URL.

3. Sending Requests:
For GET requests, simply click Send after inputting the URL.

4. Viewing Responses:
After sending a request,
the response will display in the right pane of Insomnia.
Shows: status code, response time, and returned data.

5. Testing Various Endpoints:
Test all endpoints like categories, products, and tags.
Adjust HTTP method and input data as necessary for each endpoint.

Images:

![Insomnia](images/insomnia.rest.jpg)

## dotenv

How to create an '.env' file with npm dotenv?

1. Install 'dotenv' dependency with command:
npm install dotenv

2. Create '.env' file in root of project directory.
Create a new file named '.env'

3. Add enviroment variables, Edit '.env' file:
DB_NAME=''
DB_USER=''
DB_PASSWORD=''

4. Configure application to use 'dotenv'
require('dotenv').config()

5. Protect '.env' file
In '.gitignore' file, add:
.env

Links:

- [dotenv npm](https://www.npmjs.com/package/dotenv)
- [dotenv github](https://github.com/motdotla/dotenv?fbclid=IwAR2_hAbEX8rUPKqbcQi1z7QELvHMldEex6ZLQ3NKHNTYeCw1YH30zl_-BHk)

Images:

![dotenv1](images/dotenv1.jpg)

![dotenv2](images/dotenv22.jpg)

![dotenv3](images/dotenv333.jpg)

## ORM

What is it?

Object-relational mapping (ORM), is a technique used in creating a "bridge" between object-oriented programs and, in most cases, relational databases. Put another way, you can see the ORM as the layer that connects object oriented programming (OOP) to relational databases.

- [ORM Wikipedia](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping)
- [ORM](https://www.freecodecamp.org/news/what-is-an-orm-the-meaning-of-object-relational-mapping-database-tools/#:~:text=Object%20Relational%20Mapping%20(ORM)%20is,(OOP)%20to%20relational%20databases.)

## Nodemon

What is it?

nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development.

To use nodemon, replace the word node on the command line when executing your script.

You can also install nodemon as a development dependency:

npm install --save-dev nodemon

- [nodemon npm](https://www.npmjs.com/package/nodemon)

## mysql

- [mysql website](https://www.mysql.com/)

Images:

![mysql](images/mysqlllllll.jpg)

## mysql2

- [mysql2 npm](https://www.npmjs.com/package/mysql2)

Images:

![mysql2](images/mysql2.jpg)

## Sequelize

- [sequelize npm](https://www.npmjs.com/package/sequelize)
- [sequelize](https://sequelize.org/docs/v6/)
- [sequelize models](https://sequelize.org/docs/v6/core-concepts/model-basics/)
- [Data Types](https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)
- [Associations](https://sequelize.org/docs/v6/core-concepts/assocs/)
- [Model Querying - Basics](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)
- [Taking advantage of Models being classes](https://sequelize.org/docs/v6/core-concepts/model-basics/#taking-advantage-of-models-being-classes)
- [Validations & Constraints](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/)
- [belongstomany](https://sequelize.org/api/v6/class/src/associations/belongs-to-many.js~belongstomany)

Images:

![sequelize](images/seqqqqqqqqqq.jpg)

![sequelize 1](images/seq1.jpg)

![sequelize 2](images/seq2.jpg)

![sequelize 3](images/seq3.jpg)

![sequelize 4](images/seq4.jpg)

## MISC

- [VIDEO SUBMISSION HELP](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide)
- [ASYNC AND AWAIT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Try and Catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [rest](https://en.wikipedia.org/wiki/REST#Applied_to_web_services)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [Full Stack Blog](https://coding-boot-camp.github.io/full-stack/)
- [Deploy with Heroku and MySQL](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)

## JawsDB

- [JawsDB MySQL](https://elements.heroku.com/addons/jawsdb)

## bcrypt

- [bcrypt npm](https://www.npmjs.com/package/bcrypt)
- [bcrypt github](https://github.com/kelektiv/node.bcrypt.js?fbclid=IwAR3_mtdkHV3l5mVP8NsXCn4MsbJxGUfZpug8luBF8XntU2FMX_xxRVJv2g8)

Images:

![bcrypt1](images/bcrypt1.jpg)

![bcrypt2](images/b2.jpg)

![bcrypt3](images/b3.jpg)

![bcrypt4](images/b4.jpg)

![bcrypt5](images/b5.jpg)

![bcrypt6](images/b6.jpg)

![bcrypt7](images/b7.jpg)

![bcrypt8](images/b8.jpg)

![bcrypt9](images/b9.jpg)

![bcrypt10](images/b10.jpg)

## eslint

- [eslint npm](https://www.npmjs.com/package/eslint)
- [eslint website](https://eslint.org/)
- [eslint github](https://github.com/eslint/eslint?fbclid=IwAR189HwHLg5WM6CxjoNCKtXcjGEvLIBw6B7QSyrbduAX1qcAnnG-7-4duQc)

Images:

![eslint1](images/eslint1.jpg)

![eslint2](images/eslint2.jpg)

## Homework I Followed

![homework1](images/hw1.jpg)
![homework2](images/hw2.jpg)
![homework3](images/homeeywork.jpg)
![homework4](images/homeyywork22.jpg)

## Random Notes

![Basic JSON](<images/basic json.jpg>)
![Check Verisons](<images/verisons node and npm.jpg>)
![Node and npm Verisons](<images/node and npm verisons.jpg>)

## License

:heavy_exclamation_mark:

![License](https://img.shields.io/badge/license-MIT-pink.svg?style=for-the-badge)

MIT License :license:

## How to Contribute

:tada:

N/A

## Credits

:name_badge:

N/A

## Badges

:trophy:

N/A

## tests

N/A

## features

N/A