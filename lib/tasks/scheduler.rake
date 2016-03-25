desc "Heroku scheduler tasks"
task :ping => :environment do
  if Time.now.hour > 7 && Time.now.hour < 18
    puts `curl www.matt-stjernholm.com`
  end
end
