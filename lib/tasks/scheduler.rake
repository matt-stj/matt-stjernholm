desc "Heroku scheduler tasks"
task :ping => :environment do
  if Time.now.hour > 7 && Time.now.hour < 18
    p 'sending curl request'
    puts `curl www.matt-stjernholm.com`
    p 'requst sent'
  end
end
