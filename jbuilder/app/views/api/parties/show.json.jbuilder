json.extract! @party, :name, :location

json.guests @party.guests.each do |guest|
  json.name guest.name
  json.gifts guest.gifts.each do |gift|
    json.extract! gift, :title, :description
  end
end