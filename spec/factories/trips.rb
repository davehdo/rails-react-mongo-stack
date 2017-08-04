FactoryGirl.define do
  factory :trip do
    city "Boston"
    state "MA"

    association :user, factory: :user
  end
end
