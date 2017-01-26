require 'jasmine'
load 'jasmine/tasks/jasmine.rake'

require 'find'
require 'fileutils'

def copy_js(source_path, target_path)
  Find.find(source_path) do |source|
    target = source.sub(/^#{source_path}/, target_path)
    if File.directory? source
      FileUtils.mkdir target unless File.exists? target
    else
      FileUtils.copy(source, target) if File.basename(source).end_with?('.js')
    end
  end
end

task :js do
  copy_js("./src/app", "./dist/js")
  copy_js("./lib", "./dist/lib")
end

task :scss do
  system("scss src/style/index.scss:dist/css/index.css ")
end

task :jade do
  system("jade --pretty src/index.jade -o dist")
end


task :compile => ["scss", "jade", "js"]
task :test => ["jasmine"]
task :default => ["compile","test"]
