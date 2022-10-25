function stringifyNumbers(obj) {
    let newObj = {}
    for (let key in obj) {
        if (typeof(obj[key]) === "number") {
            newObj[key] = obj[key].toString()
        }
        else if (typeof(obj[key]) === "object" && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    } 
    console.log(newObj)
    return newObj
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        },
        order: [3, 5, 3, 2, 4, 9]
    }
}

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/