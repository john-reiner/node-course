const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a<0||b<0) {
                return reject('Numbers MUST be non-negative.')
            }
            if (typeof a !== 'number' || typeof b !== 'number') {
                return reject('Can ONLY take in numbers.')
            }
            resolve(a+b)
        }, 500);
    })
}

const doWork = async () => {
    const sum = await add(1, 99)
    const sum2 = await add(sum, 99.68)
    const sum3 = await add(sum2, 7)
    return `First: ${sum}. Second: ${sum2}. Third: ${sum3}`
}

doWork().then(result => console.log('result', result)).catch(e => console.log('ERROR: ',e))