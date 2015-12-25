#Added to make haml work in assets/templates directory.
#http://stackoverflow.com/questions/18752197/how-to-use-angularjs-routes-with-haml-templates-in-a-rails-app
#https://github.com/leshill/handlebars_assets/issues/145
#http://guides.rubyonrails.org/configuring.html
#
Rails.application.config.after_initialize do 
  Rails.application.assets.register_engine('.haml', Tilt::HamlTemplate)
end
