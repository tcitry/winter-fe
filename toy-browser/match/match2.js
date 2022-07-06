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
    if (params === 'a') {
        return foundA2
    }
    else {
        return start(params)
    }
}

function foundA2(params) {
    if (params === 'b') return foundB2
    return foundA(params)
}

function foundB2(params) {
    if (params === 'x') return end
    return foundB(params)
}

function end(params) {
    return end
}

//字符串是否匹配`abcabx`
console.log(match("hi abcabcabx string"))
