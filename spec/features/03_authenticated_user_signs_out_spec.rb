require "rails_helper"

# As an authenticated user
# I want to sign out
# So that no one else can post bakeries or reviews on my behalf

# [] When signed in, the sign in link in the topbar is changed to a sign out link.
# [] Clicking the sign out link in the topbar signs out the user.

feature "Authenticated user can sign out" do
  scenario "Authenticated user signs out successfully" do

    user = FactoryGirl.create(:user)

    visit new_user_session_path
    expect(page).to have_content "Log in"

    fill_in "Password", with: user.password
    fill_in "Email", with: user.email

    click_button "Sign In"

    # expect(page).to have_content "Sign Out"
    #
    # click_on "Sign Out"
    #
    # expect(page).to have_content "Signed out successfully"
    # expect(page).to have_content "Sign In"
    # expect(page).to have_content "Sign Up"
  end

end
