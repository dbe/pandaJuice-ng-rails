# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
#

sale = Sale.create(start: DateTime.now(), finish: DateTime.now() + 1.day)

item = Item.create(name: 'Vape Wild (S+C)^2', description: 'A smooth strawberries and cream flavor from Vape Wild')

nic3 = item.item_options.create(name: 'nicotine', value: '3 mg')
nic6 = item.item_options.create(name: 'nicotine', value: '6 mg')
size10 = item.item_options.create(name: 'size', value: '10 mL')
size30 = item.item_options.create(name: 'size', value: '30 mL')

sc_3_10 = item.variants.create(sku: "#{item.name}-#{nic3.value}-#{size10.value}")
sc_3_10.item_options << nic3
sc_3_10.item_options << size10

sc_3_30 = item.variants.create(sku: "#{item.name}-#{nic3.value}-#{size30.value}")
sc_3_30.item_options << nic3
sc_3_30.item_options << size30

sale.sale_variants.create(:quantity => 30, :cost => 12.99, :variant => sc_3_10)
sale.sale_variants.create(:quantity => 5, :cost => 7.00, :variant => sc_3_30)
