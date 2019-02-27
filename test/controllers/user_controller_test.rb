require 'test_helper'

class UserControllerTest < ActionDispatch::IntegrationTest
  test "should get use" do
    get user_use_url
    assert_response :success
  end

end
