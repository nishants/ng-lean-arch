require 'jasmine'
load 'jasmine/tasks/jasmine.rake'

task :scss do
  system("scss style/index.scss:style/index.css ")
end

task :jade do
  system("jade --pretty index.jade")
end


task :compile => ["scss", "jade"]
task :test => ["jasmine"]
task :default => ["compile","test"]
