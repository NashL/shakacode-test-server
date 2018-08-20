class User < ApplicationRecord

  before_create
  # encrypt password
  has_secure_password

  # associations
  belongs_to :role

  # Validations
  validates_presence_of :name, :email, :password_digest

  def set_default_role
    update!(role: Role.default)
  end
end
