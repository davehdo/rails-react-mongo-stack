![Build Status](https://codeship.com/projects/d0b30d60-59bc-0135-70d7-0a5f2ff2ef9a/status?branch=master)
![Code Climate](https://codeclimate.com/github/laurado/hungry-travels.png)
<!-- [![Coverage Status](https://coveralls.io/repos/github/laurado/hungry-travels/badge.svg)](https://coveralls.io/github/laurado/hungry-travels) -->


# Rails, React, and SQLite stack


## Technologies
* React.js Front End with React Router to prevent page reloads
* Ruby on Rails back end with PostgreSQL database
* Mobile First design
* Modern, minimalist styling with clear design pattern to make UX easier to navigate

## Setup
To get set up, clone this repository and run:
```
bundle
rake db:create
rake db:migrate
rails s
```

In a separate terminal window, run:
```
npm install
npm start
```

# Testing
## Server side testing
no installation necessary
```bundle exec rspec .```

## Client side testing
First, install Karma
```
npm install --save-dev jasmine-core karma karma-jasmine
npm install -g karma-cli
```
Then run
```npm test```
