require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many :trips }

  it { should have_valid(:first_name).when('John', 'Sally') }
  it { should_not have_valid(:first_name).when(nil, '') }

  it { should have_valid(:last_name).when('Smith', 'Swanson') }
  it { should_not have_valid(:first_name).when(nil, '') }

  it { should have_valid(:email).when('user@example.com', 'another@gmail.com') }
  it { should_not have_valid(:email).when(nil, '', 'urser') }

  describe 'password and password confirmation should match' do
    context 'user password and password confirmation match' do
      let(:user) { create(:user) }

      it 'has a valid user' do
        expect(user).to be_valid
        expect(user.errors[:password_confirmation]).to be_blank
      end
    end

    context 'user password and password confirmation do not match' do
      user = User.new
      user.password = 'password'
      user.password_confirmation = 'anotherpassword'

      it 'has a matching password confirmation for the password' do
        expect(user).to_not be_valid
        expect(user.errors[:password_confirmation]).to_not be_blank
      end
    end
  end

  describe 'email must be unique' do
    context 'user email is unique' do
      let(:user) { create(:user) }

      it 'has a valid user' do
        expect(user).to be_valid
      end
    end

    context 'user email is not unique' do
      let(:user) { create(:user, email: 'email@email.com') }

      it 'has a invalid user' do
        user = User.new
        user.email = 'email@email.com'
        
        expect(user).to_not be_valid
      end
    end
  end
end
