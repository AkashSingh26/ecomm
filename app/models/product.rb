class Product < ApplicationRecord
  has_many_attached :images do |attachable|
    attachable.variant :thumb, resize_to_limit: [100, 100]
  end

  belongs_to :category
  has_many :stocks, dependent: :destroy
  has_many :order_products, dependent: :destroy
end
