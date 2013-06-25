
require 'sinatra'
require 'haml'
 

  get '/' do
    haml :index do
    	haml :login
    end
  end

  get '/login' do
  	haml :login
  end

  get '/call' do
  	haml :call
  end

