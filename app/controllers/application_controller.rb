class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  #Added due to this blog post https://technpol.wordpress.com/2014/04/17/rails4-angularjs-csrf-and-devise/
  after_filter :set_csrf_cookie_for_ng

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  protected

  #NOTE: I changed this from what the blog post suggested: super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
  #Because rails 4.2.5 masks the token on each request and thus you have to unmask it by passing thur the valid_authenticity_token? function
  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end
end
