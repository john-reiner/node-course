// Object property shorthand

const name = 'John'

const userAge = 30

const user = {
    name,
    age: userAge,
    location: 'Keyport'
}

console.log(user)

// Object destructuring

const product = {
    lable: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 3.9
}

// const {lable: productLable, stock, rating = 0} = product

// console.log(productLable, stock, rating)

const transaction = (type, { lable, stock }) => {
    console.log(type, lable, stock)
}

transaction('order', product)