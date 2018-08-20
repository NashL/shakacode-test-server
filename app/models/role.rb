class Role < ApplicationRecord
  has_many :users
  has_many :admins

  class << self
    def default
      Role.where('name = ?', 'User').first
    end
  end
end
