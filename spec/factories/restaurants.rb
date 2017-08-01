FactoryGirl.define do
  factory :restaurant do
    name "Archie's"
    address "12345 Fake Street"
    city "Boston"
    state "MA"
    zip "12345"

    association :trip, factory: :trip
  end
end
