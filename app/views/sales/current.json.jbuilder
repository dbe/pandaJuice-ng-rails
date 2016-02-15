json.set! :sale do
  json.extract!(@sale, :id, :start, :finish)

  json.items(@sale.items, :id, :name, :description)

  json.sale_variants(@sale.sale_variants) do |sv|
    json.extract!(sv, :id, :quantity, :cost)

    json.variant do
      json.extract!(sv.variant, :id, :sku)
      json.item_options(sv.variant.item_options) do |io|
        json.extract!(io, :id, :name, :value)
      end
    end
  end
end
