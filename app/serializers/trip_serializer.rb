class TripSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :tags, :start_date, :formatted_date

  def formatted_date
    if object.start_date
      object.start_date.strftime('%a %B %d, %Y')
    end
  end
end
