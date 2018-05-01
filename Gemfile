source 'https://rubygems.org/'
ruby '2.3.3'

gem 'active_model_serializers'
gem 'devise'
# gem 'geocoder'
gem 'rails', '~> 5.1.2'
# gem 'pg', '~> 0.15'
# gem "sqlite3"
gem 'mongoid', '~> 6.1.0'

gem 'bootstrap-sass', '~> 3.3.7'

gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails' # bootstrap relies on this
gem 'listen'
gem 'http'

gem "nokogiri", "~> 1.8.1" # to avoid a known security vulnerability with 1.8.0, a dependency of a few of the testing platforms

group :development, :test do
  gem 'capybara'
  gem 'dotenv-rails'
  gem 'factory_girl_rails'
  gem 'rspec-rails', '~> 3.5'
  gem 'pry-rails'
  gem 'shoulda'
  gem 'valid_attribute'
  gem "database_cleaner"
end

group :test do
  gem 'launchy', require: false
  gem 'coveralls', require: false
end

group :production do
  gem 'rails_12factor'
end
