This was forked from [Hungry Travels](https://github.com/laurado/hungry-travels)

# Rails, React, and Mongo stack


## Technologies
* React.js Front End with React Router to prevent page reloads
* Ruby on Rails 
* Devise authentication
* Mobile First design
* Modern, minimalist styling with clear design pattern to make UX easier to navigate

## Setup
This assumes you have the following installed
* ruby - the correct version, as listed in Gemfile
* node.js 
* yarn - for dependency management


To get set up, clone this repository, then run ```bundle```
(or if this command does not work then first run gem install bundler).

To install the necessary javascript packages ```npm install```

Update mongoid.yml to define the name of the database, to avoid interfering with other projects

## Running locally
```
rails s
```

In a separate terminal window, run:
```
npm start
```

## File Structure
* the front end files are located in ```/react```
* the back end files are located in ```/app```
* Where they meet, React is launched from ```/app/views/static_pages/index.html.erb```

# Testing
## Server side testing
No installation necessary. Just run:
```bundle exec rspec .```

## Client side testing
First, install Karma
```
npm install -g karma-cli
```
Then run
```npm test```

## Deploying

