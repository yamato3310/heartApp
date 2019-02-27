require 'test_helper'

class ScreenControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get screen_show_url
    assert_response :success
  end

end
