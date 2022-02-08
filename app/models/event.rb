class Event < ApplicationRecord
  belongs_to :admin

  validates :title, :description, presence: true
end
