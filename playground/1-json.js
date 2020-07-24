const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.title)
// fs.writeFileSync('1-json.json', bookJSON)
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)



const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

name = 'John'
planet = 'Earth'
age = 30

data.name = name
data.age = age

const newJSONObject = JSON.stringify(data)
fs.writeFileSync('1-json.json', newJSONObject)
console.log(newJSONObject)


