FactoryGirl.define do
  factory :user do
    sequence(:email) {|n| "person#{n}@example.com"}
    first_name 'Ann'
    last_name 'Perkins'
    password 'password'
    password_confirmation 'password'
  end
end
