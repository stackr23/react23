import chalk from 'chalk'

// no arrow function -> preserve context!
const chalkExt = function (parts, ...substitutions) {
    let rawResults      = [],
        cookedResults   = [],
        chalkParts

    parts.forEach((v, i) => {
        rawResults.push(parts.raw[i])
        cookedResults.push(parts[i])
        if (i < substitutions.length) {
            rawResults.push(substitutions[i])
            cookedResults.push(substitutions[i])
        }
    })
    chalkParts      = [cookedResults.join('')]
    chalkParts.raw  = [rawResults.join('')]

    return chalk(chalkParts)
}

// TBD: /stack/utils/logger - with log lvls via NODE_ENV
export const errorMsg   = str => console.log(chalkExt`\n{bgRed {bold [Error]} ${str}}\n`)
export const debugInfo  = str => console.log(chalkExt`\n{bgYellow {bold [DEBUG]} ${str}}\n`)

export default chalkExt
