require 'rails_helper'

describe Restaurant, type: :model do
  it { should belong_to :trip }

  it { should have_valid(:name).when('Union Square Donuts', 'Dunkin Donuts') }
  it { should_not have_valid(:name).when(nil, '') }

  it { should have_valid(:address).when('50 Follen St', '10 Milk St') }
  it { should_not have_valid(:address).when(nil, '') }

  it { should have_valid(:city).when('Boston', 'Cambridge') }
  it { should_not have_valid(:city).when(nil, '') }

  it { should have_valid(:state).when('MA', 'MN') }
  it { should_not have_valid(:state).when(nil, '') }

  it { should have_valid(:zip).when('02138', '55378') }
  it { should_not have_valid(:zip).when(nil, '') }
end
