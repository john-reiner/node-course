const { resolve } = require("path");

const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 500);
    })
}

// add(1,2).then((sum) => {
//     console.log(sum)

//     add(sum, 3).then((sum2) => {
//         console.log(sum2)

//         add(sum2, 3).then((sum3) => {
//             console.log(sum3)
//         }).catch((e) => {
//             console.log(e)
//         })
//     }).catch((e) =>  {
//         console.log(e)
//     })
// }).catch((e) => console.log(e))

add(1,2).then((sum) => {
    console.log(sum)
    return add(sum, 3)
}).then((sum2) => {
    console.log(sum2)
    return add(sum2, 3)
}).then((sum3) => {
    console.log(sum3)
    
}).catch((e) => {
    console.log(e)
})