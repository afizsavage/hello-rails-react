class V1::MessagesController < ApplicationController
  def index
    render json: { messages: { message: 'Awesome day!' } }.to_json
  end
end
