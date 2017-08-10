require "rails_helper"

feature "Authenticated user can update their profile information" do
  scenario "Authenticated user updates their profile information" do

    user = FactoryGirl.create(:user)

    visit new_user_session_path

    fill_in "Password", with: user.password
    fill_in "Email", with: user.email

    click_button "Sign In"

    visit edit_user_registration_path

    expect(page).to have_content "Edit"
    expect(page).to have_content "Email"
    expect(page).to have_content "Password"

    fill_in "Current password", with: user.password

    expect(page).to have_field("Email", with: user.email)

    click_button "Update"

    # expect(page).to have_content "Your account has been updated successfully"
  end
end
