class Admin < ApplicationRecord
    has_many :events

    validates :username, :password, presence: true
end
