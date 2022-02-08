class EventsController < ApplicationController
    before_action :find_event, only: [:show]

    def index
        events = Events.all
        render json: events, status: :ok
    end

    def show
        render json: @event, status: :ok
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    def update
        @event.update!(event_params)
        render json: event, status: :ok
    end

    def destroy
        @event.destroy
        head :no_content
    end

    private

    def find_event
        @event = Event.find(params[:id])
    end

    def event_params
        params.permit(:title, :description, :admin_id)
    end
end
