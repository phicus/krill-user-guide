const capitalizeFirstLetter = (text) => text[0].toUpperCase() + text.slice(1)
const capitalizeWords = (text) => text.split(' ').map(word => capitalizeFirstLetter(word)).join(' ')

module.exports = {
    capitalizeWords,
    capitalizeFirstLetter
}
