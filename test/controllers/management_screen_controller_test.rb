require 'test_helper'

class ManagementScreenControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get management_screen_show_url
    assert_response :success
  end

end
