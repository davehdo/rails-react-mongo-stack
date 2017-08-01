FactoryGirl.define do
  factory :trip do
    name "Boston"
    city "Boston"
    state "MA"

    association :user, factory: :user
  end
end
