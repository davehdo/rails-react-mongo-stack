require 'rails_helper'

feature "Authenticated users can delete their account" do
  scenario "user deletes account successfully" do
    user = FactoryGirl.create(:user)

    visit new_user_session_path
    fill_in "Password", with: user.password
    fill_in "Email", with: user.email

    click_button "Sign In"

    click_on "Edit Profile"

    expect(page).to have_content "Edit User"

    click_on "Cancel my account"

    expect(page).to have_content "Your account has been successfully cancelled."
    expect(page).to have_content "Hungry Travels"
  end
end
