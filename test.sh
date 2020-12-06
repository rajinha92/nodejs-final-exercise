#create product
curl -i \
    -X POST \
    -H "Content-Type: application/json" \
    -d "{\"name\":\"Banana\",\"price\": 1.99 }" \
    "http://localhost:3000/product"

#update product
curl -i \
    -X PUT \
    -H "Content-Type: application/json" \
    -d "{\"name\":\"Banana Special\",\"price\": 2.99 }" \
    "http://localhost:3000/product/1"

#find product by id
curl -i \
    -H "Content-Type: application/json" \
    "http://localhost:3000/product/1"

#list all products
curl -i \
    -H "Content-Type: application/json" \
    "http://localhost:3000/product"

#delete product by id
curl -i \
    -H "Content-Type: application/json" \
    -X DELETE \
    "http://localhost:3000/product/1"

#list all products
curl -i \
    -H "Content-Type: application/json" \
    "http://localhost:3000/product"