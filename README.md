This was forked from [Hungry Travels](https://github.com/laurado/hungry-travels)

# Rails, React, and Mongo stack
This employs a Rails back end and uses webpack to run a React front end. Webpack transpiles the React code into /app/javascripts/bundle.js, which is then served via the Rails asset pipeline.


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


1. To get set up, clone this repository, then run ```bundle``` (or if this command does not work then first run gem install bundler).
1. To install the necessary javascript packages ```npm install```
1. Update mongoid.yml to define the name of the database, to avoid interfering with other projects

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
1. Update mongoid.yml with the appropriate settings to connect to mLab
```
production:
    clients:
        default:
            uri: "<%= ENV['MONGODB_URI'] %>"

            options:
                max_retries: 30
                retry_interval: 1
                timeout: 15
                refresh_interval: 10
```

1. Create database indexes
```rake db:mongoid:create_indexes```
1. Create a Heroku app
1. Provision a mLab MongoDB resource. This will define an environment variable MONGODB_URI.
1. Configure two buildpacks in Heroku. There should be a build pack for ```heroku/node.js```, which will tell Heroku to ```npm run heroku-postbuild``` in order to transpile and minify the React components and place them in the assets folder. There should be a build back for ```heroku/ruby``` which will tell Heroku to ```rake assets:precompile``` thereby taking items in the assets folder and compiling into one single javascript asset. They must be placed in that order. This is designed to be deployed to heroku with no manual compilation of javascript. 


