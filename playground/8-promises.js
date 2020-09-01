const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(undefined)
        resolve([9,2,4,7,9,8])
    }, 1000)
})

doWorkPromise.then((result) => {
    console.log('Success!', result[3])
}).catch((error) => {
    console.log('Error: ', error)
})