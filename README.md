# Smoothie Bar [![Build Status](https://travis-ci.org/FAC-Sixteen/Smoothie-bar.svg?branch=master)](https://travis-ci.org/FAC-Sixteen/Smoothie-bar)

A virtual smoothie bar! place your order at https://smoothiebar.herokuapp.com/


> Authors: [Sam](https/github.com/starsuit), [Ryan](https/github.com/RymaTech), [Kate](https/github.com/dubhcait) & [Burhan](https/github.com/Baalwan)

## Local Set up

- Clone this repo
- Run `npm i` to install npm dependencies
- If you like, run `npm buildtest`. This will run a script that builds a test database locally on your machine. You'll need this string for your config.env file: 
``` ba
TEST_DATABASE_URL = postgres://smoothietester:test@localhost:5432/smoothietest
 ```
- Run `npm run fulltest` to run both database and server tests
- `npm test` will run only the server tests

## Planning

We sketched out our first ideas out on whiteboards:
- Initial plan:

![initial plan](https://files.gitter.im/foundersandcoders/week8-smoothiebar/cBCu/MVIMG_20190424_113412.jpg)
- Initial layout:

![initial layout](https://files.gitter.im/foundersandcoders/week8-smoothiebar/cBCu/IMG_20190424_113416.jpg)
- User/code journey:

![user/code journey](https://files.gitter.im/foundersandcoders/week8-smoothiebar/cBCu/IMG_20190424_115537.jpg)


We then wrote out our entire file structure - along with file purposes and overall themes:
- File structure:

![file structure](https://files.gitter.im/foundersandcoders/week8-smoothiebar/cBCu/IMG_20190424_122807.jpg)
- Controllers structure: 

![controllers structure](https://files.gitter.im/foundersandcoders/week8-smoothiebar/cBCu/IMG_20190424_123727.jpg)

After our design talk, we drew up a few designs in Figma:

![mock-up](https://files.gitter.im/foundersandcoders/week8-smoothiebar/62Xl/Screenshot-2019-04-25-at-10.08.14.png)


Some features we wanted to see on each page (✨ = level of stretch goal):

### Order page

- [x] Name
- [x] Dropdown of smoothies
- [x] Button - order
- [ ] Show contents of smoothies ✨
- [ ] Timestamp ✨

### Personal page - show data

- [x] Name
- [x] Order history
- [ ] Favourite smoothie (most ordered) ✨
- [ ] Authentication? ✨✨
- [ ] Add your own smoothie recipe ✨✨✨


## To-do

- [x] Set up file structure
- [x] Installed npm packages
- [x] Set up server (app.js, index.js)
- [x] Set up layout (/views/layout/main.hbs)
- [x] Set up partials (/views/partials/..)
- [x] Set up main page content (/views/home.hbs)
- [x] Set up database (/model/build_db.js, db_connection.js)
- [x] Write a query to put new data in DB
- [x] Connect query to form POST handler (/controllers/order.js)
- [x] Send back data from DB
- [x] Render data from DB response on page (/controllers.receipt.js ==> /receipt.hbs)
- [x] Deploy to Heroku
- [x] Travis?
- [x] WRITE SOME TESTS OK


### To-do stretchies ✨✨

- [ ] Make an API call in the backend for nutrutional info

## Day 1

- We coded as a team on one laptop
- We planned and wrote down a detailed file structure - we found writing this out really helped with structuring our code later on
- We wrote out our core express server files - app.js & index.js
- Wrote out a very basic handlebars template, added some partials
- Wrote the code to send our {{{body}}} content to the server
- Once we had it up, straight to Heroku!
 ![To Heroku](https://i.imgflip.com/2zcga5.jpg)
- Wrote the build code for our database, got it running after a few snags
- Ate lots of chocolate (Kate) 🍫


## Day 2

- Connected our database up to the app
- Used Handlebars to render data on the page
- we split up for pair coding
- Wrote tests for the server and the database
- ✨✨ CSS'd ✨✨
- we worked on a 404 page
- we worked rendering all the order history

## Preview
![](https://i.imgur.com/uHzEnO8.png)


## Issues

- Struggled with a test database on heroku
- not breaking established tests when experimenting with new features
- communication so when pair coding so the entire team knows their objectives

## Cool stuff we learned

- SQL in database build can just be a string - doesn't need to be a separate file (very cool)
- The routing in express/handlebars doesn't have to be in a separate file (when it is very small)
- Script to build a whole test database from a js file (very very cool)
