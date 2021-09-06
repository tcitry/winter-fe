function match(params) {
    let state = start
    for (let c of params) {
        state = state(c)
        if (state === end) return true
    }
    return false
}

function start(params) {
    if (params === 'a') {
        return foundA
    }
    else {
        return start
    }
}

function foundA(params) {
    if (params === 'b')
        return foundB
    else
        return start(params)
}

function foundB(params) {
    if (params === 'c') {
        return foundC
    } else {
        return start(params)
    }
}

function foundC(params) {
    if (params === 'd') {
        return end
    }
    else {
        return start(params)
    }
}

function end(params) {
    return end
}

console.log(match("hi ababcd string"))
