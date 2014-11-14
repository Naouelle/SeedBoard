require 'rubygems'
require 'sinatra'
require 'data_mapper'
require 'pry'

DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/simp.db")

class User
  include DataMapper::Resource
  property :id, Serial
  property :login, Text
  property :pass, Text
end

class Msg
  include DataMapper::Resource
  property :id, Serial
  property :content, Text
end

DataMapper.finalize
User.auto_upgrade!
Msg.auto_upgrade!
enable :sessions


count = 0

get '/' do 
  erb :login
end

get '/index' do 
  @client = session[:client]
  @msgs = Msg.all
  erb :index
end

post '/' do
  user = User.first(login: params[:login])
  if (user == nil || user.pass != params[:pass])
    redirect '/'
  else
    session[:client] = user
    redirect '/index'
 end
end

get '/del' do
  Msg.all.destroy
  redirect '/index'
end

post '/index' do
  count = count + 1
  if (count == 7 || count > 6)
    Msg.all.destroy	
    Msg.create(content: params[:chat])
    count = 0
    redirect '/index'
  else
    Msg.create(content: params[:chat])
    redirect '/index'
  end
end
