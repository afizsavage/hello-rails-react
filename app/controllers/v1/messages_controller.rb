class V1::MessagesController < ApplicationController
  def index
    render json: { message: [{ message: 'Awesome day!' }] }.to_json
  end
end
