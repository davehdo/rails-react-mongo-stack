require_relative 'boot'

# require 'rails/all'

# because we're using Mongoid, require the following specifically
# rather than rails/all so we can omit activerecord
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_cable/engine"
require "rails/test_unit/railtie"

# require "active_model/railtie"
# require "active_job/railtie"
# require "active_record/railtie"
#
# require "action_view/railtie"
#
# require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ReactRailsMonolith
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
