# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

FishingSpot.destroy_all
Fish.destroy_all

lake_allatoona = FishingSpot.new(title: "Lake Allatoona", location: "Northwest of Atlanta,GA", descrption: "This 11,860-acre U.S. Army Corps of Engineers impoundment of the Etowah River is 30 miles north of Atlanta.  Allatoona features convenient boat ramp access and parking, as well as camping opportunities.  The lake receives heavy use from boaters, skiers and anglers given its close proximity to Atlanta.")

lake_allatoona.fish = [
    Fish.new(name: "Spotted Bass", length: 13, weight: 2, photo: "<a href="https://imgur.com/Ruup9pH"><img src="https://i.imgur.com/Ruup9pHm.jpg" title="source: imgur.com" /></a>")
    Fish.new(name: "Stripped Bass", length: 24, weight: 7, photo: "<a href="https://imgur.com/iHZ6Lu6"><img src="https://i.imgur.com/iHZ6Lu6m.jpg" title="source: imgur.com" /></a>")
    Fish.new(name: "Blue Catfish", length: 36, weight: 20, photo: "<a href="https://imgur.com/H7wZkSz"><img src="https://i.imgur.com/H7wZkSzm.jpg" title="source: imgur.com" /></a>")
]

clarks_hill_lake = FishingSpot.new(title: "Clarks Hill Lake", location: "Georgia S. Carolina border near Augusta,GA", description: "Clarks Hill (known as J. Strom Thurmond in S.C.) is Georgia's largest reservoir at 71,535 acres.  This U.S. Army Corps of Engineers reservoir is located 30 miles northeast of Augusta on the Savannah River. The numerous creeks feeding the lake, over 1,200 miles of shoreline and large areas of open water provide a wide range of fishing opportunities.")

clarks_hill_lake.fish = [
    Fish.new(name: "Largemouth Bass", length: 16, weight: 2, photo: "<a href="https://imgur.com/LPrr0yZ"><img src="https://i.imgur.com/LPrr0yZm.jpg" title="source: imgur.com" /></a>")
    Fish.new(name: "Black Crappie", length: 12, weight: 1, photo: "<a href="https://imgur.com/IobzQd1"><img src="https://i.imgur.com/IobzQd1m.jpg" title="source: imgur.com" /></a>")
    Fish.new(name: "Channel Catfish", length: 22, weight: 4, photo: "<a href="https://imgur.com/tyqxFYL"><img src="https://i.imgur.com/tyqxFYLm.jpg" title="source: imgur.com" /></a>")
]