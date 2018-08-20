class User < ApplicationRecord

  before_validation :set_default_role
  # encrypt password
  has_secure_password

  # associations
  belongs_to :role

  # Validations
  validates_presence_of :name, :email, :password_digest

  def set_default_role
    self.role ||= Role.default
  end
end
