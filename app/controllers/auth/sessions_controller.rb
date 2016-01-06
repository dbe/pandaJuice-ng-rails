class Auth::SessionsController < Devise::SessionsController
  respond_to :json
  wrap_parameters :user

  #Added due to this blog post https://technpol.wordpress.com/2014/04/17/rails4-angularjs-csrf-and-devise/
  after_filter :set_csrf_headers, only: [:create, :destroy]


# before_filter :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.for(:sign_in) << :attribute
  # end

  protected

    def set_csrf_headers
      cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?  
    end
end
