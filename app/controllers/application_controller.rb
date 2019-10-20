class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  def index
    json = {
"result": "OK",
"users": [
{
"id": "user1",
"name": "user1",
"email": "user1@temp.com",
"created_at": "2019-07-08T05:14:19.405Z",
"updated_at": "2019-07-08T05:14:19.405Z"
},
{
"id": "user2",
"name": "user2",
"email": "user2@temp.com",
"created_at": "2019-07-08T05:14:19.412Z",
"updated_at": "2019-07-08T05:14:19.412Z"
},
{
"id": "918e11a3659e5a99809f",
"name": "綱嶋",
"email": "yamato3310.tuna@gmail.com",
"created_at": "2019-07-17T06:56:24.601Z",
"updated_at": "2019-07-17T06:56:24.601Z"
},
{
"id": "2ebc3746403fd2969b79",
"name": "damegane",
"email": "bjan1290569@gn.iwasaki.ac.jp",
"created_at": "2019-07-17T06:56:28.566Z",
"updated_at": "2019-07-17T06:56:28.566Z"
},
{
"id": "f4cd3f716a5035bf411d",
"name": "shun",
"email": "bjsi1290346@gn.iwasaki.ac.jp",
"created_at": "2019-07-17T06:56:29.517Z",
"updated_at": "2019-07-17T06:56:29.517Z"
},
{
"id": "c9ebde8ea882d9cac16b",
"name": "kitamu",
"email": "bjrk1290230@gn.iwasaki.ac.jp",
"created_at": "2019-07-17T06:56:32.371Z",
"updated_at": "2019-07-17T06:56:32.371Z"
},
{
"id": "d4ca4f48fa8068274133",
"name": "damegane",
"email": "bjan129056@gn.iwasaki.ac.jp",
"created_at": "2019-07-17T06:58:20.531Z",
"updated_at": "2019-07-17T06:58:20.531Z"
},
{
"id": "aa7de85e86a1b4d434d9",
"name": "shun",
"email": "bjsi1290346@gn.wasaki.ac.jp",
"created_at": "2019-07-17T06:58:42.627Z",
"updated_at": "2019-07-17T06:58:42.627Z"
},
{
"id": "894dd236c062d90f8102",
"name": "kitamu",
"email": "bjrk129030@gn.iwasaki.ac.jp",
"created_at": "2019-07-17T06:58:58.114Z",
"updated_at": "2019-07-17T06:58:58.114Z"
},
{
"id": "f2173b490a8acba72821",
"name": "k",
"email": "ryo001121@outlook.jp",
"created_at": "2019-07-17T07:57:27.246Z",
"updated_at": "2019-07-17T07:57:27.246Z"
}
]
}

render json: json
  end
end
