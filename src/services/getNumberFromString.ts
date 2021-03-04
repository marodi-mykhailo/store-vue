export const getNumberFromString = (str: string) => {
    return parseFloat(str.replace(/^\D+/g, ''))
}
