require_relative 'app'
 
use Rack::ShowExceptions
 
run App.new