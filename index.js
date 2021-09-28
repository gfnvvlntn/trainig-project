
let array = [1,2,3,4,5,6,7,8,9,10]


//method FOREACH

Array.prototype.forEach2 = function(callback, thisArgs) {
    if(this == null) {
        throw new Error('cant iterate over null or undefined')
    }
    let context = this
    let obj = Object(this)
    let len = obj.length
    let el = 0
    if(arguments.length > 1) {
        context = thisArgs
    }
    if(typeof callback !== 'function') {

        throw new Error('callback is not a function')
    }

    while(el < len) {
        if(el in obj) {
            callback.call(context, this[el], el, obj)
        }
        el++
    }

}




array.forEach2((el) => {
    let listItem = document.createElement('div')
    listItem.classList.add("forEach")
    listItem.innerHTML = el
    forEach.appendChild(listItem)  

})

//method FILTER

Array.prototype.filter2 = function(callback, thisArgs) {

    if(this == null) {
        throw new Error("Can't iterate over undefined or null");
    }
    let context = this

    let obj = Object(this)

    if(arguments.length > 1) {
        context = thisArgs
    }

    if(typeof callback !== 'function') {
        throw new Error("Callback is not a function")
    }

    let len = obj.length

    let result = []

    for(let i = 0; i < len; i++) {
        if(i in obj) {
            if(callback.call(context, this[i], i, 0)) {
                result.push(this[i])
            }
        }
    }

    return result
}

let elThatIsMoreThanTen = (el) => el > 5 ? el: undefined

let newArrayFilter = array.filter2(elThatIsMoreThanTen)

newArrayFilter.filter((el) => {
    let listItem = document.createElement('div')
    listItem.classList.add("filter")
    listItem.innerHTML = el
    filter.appendChild(listItem)  

})

//method MAP

Array.prototype.map2 = function(callback, thisArg) {
    if(this == null) {
        throw new Error("Can't iterate over undefined or null")
    }

    let context = this
    
    let obj = Object(this)

    if(arguments.length > 1) {
        context = thisArg
    }

    if(typeof callback !== 'function') {
        throw new Error("Callback is not a function")
    }

    let len = obj.length

    let result = []

    let i = 0

    while(i < len) {
        if(i in obj) {
            result[i] = callback.call(context, this[i], i, 0)
        }
        i++
    }
    return result
}


let mapId = document.getElementById('map')

let addDivAndLogEl = (el) => {
    let listItem = document.createElement('div')
    listItem.classList.add("map")
    listItem.innerHTML = el * 10
    mapId.appendChild(listItem)

}

array.map2(addDivAndLogEl)


