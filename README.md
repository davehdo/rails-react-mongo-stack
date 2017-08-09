![Build Status](https://codeship.com/projects/d0b30d60-59bc-0135-70d7-0a5f2ff2ef9a/status?branch=master)
![Code Climate](https://codeclimate.com/github/laurado/hungry-travels.png)
[![Coverage Status](https://coveralls.io/repos/github/laurado/hungry-travels/badge.svg)](https://coveralls.io/github/laurado/hungry-travels)


# Hungry Travels
As a new web developer, I am particularly interested in utilizing external APIs to bring outside information into my apps. During this project, I was able to really dig into the Yelp and Google Maps APIs.

This mobile friendly app helps you plan restaurants to visit when you travel. It allows you to create itineraries for different trips and add restaurants to them. It also displays a map with pins in the location of restaurants you've added. It generates suggestions based on the city you're visiting and allows you to search for a specific restaurant.

## Technologies
* React.js Front End with React Router to prevent page reloads
* Ruby on Rails back end with PostgreSQL database
* Yelp and Google Maps external APIs
* Mobile First design

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

## Ideas 
Potential ideas to implement in the future:
* Add Carrierwave and AWS cloud storage to upload profile photo
* Remove added restaurants from suggested list
* Add OpenTable API to make reservations
