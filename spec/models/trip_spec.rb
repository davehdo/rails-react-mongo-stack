require 'rails_helper'

describe Trip, type: :model do
  it { should belong_to :user }
  it { should have_many :restaurants }

  it { should have_valid(:name).when('Boston', 'San Francisco') }
  it { should_not have_valid(:name).when(nil, '') }

  it { should have_valid(:city).when('Boston', 'Minneapolis') }
  it { should_not have_valid(:city).when(nil, '') }

  it { should have_valid(:state).when('MA', 'MN') }
  it { should_not have_valid(:state).when(nil, '') }
end
