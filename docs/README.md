Para instalar dependencias escribimos los siguientes comandos:
npm install express
npm install nodemon
npm install --save sequelize
npx sequelize-cli init     
npm install mysql2
npm install swagger-jsdoc swagger-ui-express   
npm install jsonwebtoken bcryptjs express-validator


postman JSON

ORDER (sin testear)
localhost:3011/order/create
{
    "orderTackingNumber": 12345678,
    "shoppingCartId": 101,
    "products": [
        {
            "price": "1000",
            "discount": "0.1"
        }
    ],
    "bonus": 105,
    "customerService": 1,
    "products_id": [1],
    "user_id": 1
}

PRODUCT (sin testear)
localhost:3011/product/create
{
    "name": "Baguette",
    "sku": "BAG12345",
    "price": "2.50",
    "ingredients": "Harina, agua, levadura, sal",
    "discount": 0.1,
    "score": 5,
    "dateCreated": "2023-08-30T00:00:00.000Z",
    "category_id": 2, 
    "city_id": 1,
    "image_id": 1
}

SUBCATEGORY (OK)
localhost:3011/subCategory/create
{
    "name": "Pasteleria",
    "description": "Frio",
    "url": "url"
}

CATEGORY (ERROR)
localhost:3011/category/create
{
    "name": "Dulce",
    "description": "Postre",
    "url": "url",
    "subCategory_id": 1
}

ADDRESS (OK)
localhost:3011/address/create
{
    "street": "Cll 29 kr21",
    "number": "44",
    "housing": "Edificio palo alto", 
    "zone": "Pie de la popa",
    "zipCode": "130001"
}

CITY (OK)
localhost:3011/city/create
{
    "name": "Madrid",
    "country": "España",
    "address_id": 1
}

ROLE (OK)
localhost:3011/role/create
{
    "name": "User"
}

USER (OK)
localhost:3011/user/create
{
    "name": "Alejandro",
    "lastName": "Padron",
    "email": "ale@mail.com",
    "password": "12e2e",
    "phone": "222042",
    "role": [1]
}
