require 'rails_helper'

feature "Authenticated users can delete their account" do
  scenario "user deletes account successfully" do
    user = FactoryGirl.create(:user)

    visit new_user_session_path
    fill_in "Password", with: user.password
    fill_in "Email", with: user.email

    click_button "Sign In"

    visit edit_user_registration_path

    expect(page).to have_content "Edit User"

    click_on "Cancel my account"

    # expect(page).to have_content "You need to sign in or sign up before continuing."
  end
end
