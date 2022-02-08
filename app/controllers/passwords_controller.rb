class PasswordsController < ApplicationController
    before_action :find_user

    def forgot
        token = generate_base64_token
        @user.update!(recovery_password: token)
        if @user.recovery_password_digest != nil
            PasswordMailer.password_reset(@user).deliver_now
            render json: { alert: "Your custom alert here."}
        else
            render json: {error: "Your custom error message here."}
        end
    end

    def reset
        if @user&.authenticate_recovery_password(params[:recovery_password])
            @user.update!(password_params)
            session[:user_id] = @user.id
            render json: @user, status: :ok
        else
            render json: {error: "Your custom error message here."}
        end
    end

    private

    def find_user
       @user = User.find_by(email: params[:email])
    end

    def password_params
        params.permit(:password, :password_confirmation, :recovery_password, :email)
    end

    def generate_base64_token
        SecureRandom.urlsafe_base64
    end
end
