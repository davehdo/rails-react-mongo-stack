require 'rails_helper'

describe Restaurant, type: :model do
  it { should belong_to :trip }

  it { should have_valid(:name).when('Union Square Donuts', 'Dunkin Donuts') }
  it { should_not have_valid(:name).when(nil, '') }

  it { should have_valid(:city).when('Boston', 'Cambridge') }
  it { should_not have_valid(:city).when(nil, '') }
end
