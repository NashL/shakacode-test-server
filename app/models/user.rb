class User < ApplicationRecord
  # encrypt password
  has_secure_password

  # associations
  belongs_to :role

  # Validations
  validates_presence_of :name, :email, :password_digest
end
