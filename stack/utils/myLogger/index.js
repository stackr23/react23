import chalk from 'chalk'

const {isDebug} = require('config').default

// no arrow function -> preserve context!
const chalkExt = function(parts, ...substitutions) {
    let rawResults = [],
        cookedResults = [],
        chalkParts

    parts.forEach((v, i) => {
        rawResults.push(parts.raw[i])
        cookedResults.push(parts[i])
        if (i < substitutions.length) {
            rawResults.push(substitutions[i])
            cookedResults.push(substitutions[i])
        }
    })
    chalkParts = [cookedResults.join('')]
    chalkParts.raw = [rawResults.join('')]

    return chalk(chalkParts)
}

export const errorMsg = (str, ...args) =>
    console.log(chalkExt`\n{bgRed {bold ERROR:} ${str}}\n`, ...args)

export const debugMsg = (str, ...args) => {
    if (isDebug) {
        console.log(chalkExt`\n{bgYellow {bold DEBUG:} ${str}}\n`, ...args)
    }
}
