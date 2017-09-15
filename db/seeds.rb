# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

FishingSpot.destroy_all
Fish.destroy_all

lake_allatoona = FishingSpot.create(title: "Lake Allatoona", location: "Northwest of Atlanta,GA", description: "This 11,860-acre U.S. Army Corps of Engineers impoundment of the Etowah River is 30 miles north of Atlanta.  Allatoona features convenient boat ramp access and parking, as well as camping opportunities.  The lake receives heavy use from boaters, skiers and anglers given its close proximity to Atlanta.", image:"http://tritonmike.com/toonamap1.JPG")
clarks_hill_lake = FishingSpot.create(title: "Clarks Hill Lake", location: "Georgia S. Carolina border near Augusta,GA", description: "Clarks Hill (known as J. Strom Thurmond in S.C.) is Georgia's largest reservoir at 71,535 acres.  This U.S. Army Corps of Engineers reservoir is located 30 miles northeast of Augusta on the Savannah River. The numerous creeks feeding the lake, over 1,200 miles of shoreline and large areas of open water provide a wide range of fishing opportunities.", image: "http://metrospirit.com/wp-content/uploads/2014/07/Clarks-Hill-Lake-1.gif")

fish_one = Fish.create({name: "Spotted Bass", length: 13, weight: 2, photo: "https://i.imgur.com/Ruup9pHm.jpg", fishing_spot_id: lake_allatoona.id})
fish_two = Fish.create(name: "Stripped Bass", length: 24, weight: 7, photo: "https://i.imgur.com/iHZ6Lu6m.jpg", fishing_spot_id: lake_allatoona.id)
fish_three = Fish.create(name: "Blue Catfish", length: 36, weight: 20, photo: "https://i.imgur.com/H7wZkSzm.jpg", fishing_spot_id: lake_allatoona.id)
fish_four = Fish.create(name: "Largemouth Bass", length: 16, weight: 2, photo: "https://i.imgur.com/LPrr0yZm.jpg", fishing_spot_id: clarks_hill_lake.id)
fish_five = Fish.create(name: "Black Crappie", length: 12, weight: 1, photo: "https://i.imgur.com/IobzQd1m.jpg", fishing_spot_id: clarks_hill_lake.id)
fish_six = Fish.create(name: "Channel Catfish", length: 22, weight: 4, photo: "https://i.imgur.com/tyqxFYLm.jpg", fishing_spot_id: clarks_hill_lake.id)
