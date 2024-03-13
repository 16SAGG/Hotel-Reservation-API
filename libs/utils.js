const utils = {}

utils.getNumericDateWithoutTime = (NumericDate)=>{
    const date = new Date(NumericDate)
    const formattedDate = date.toLocaleDateString()
    const dateWithoutTime = new Date(formattedDate).valueOf()

    return dateWithoutTime
}

utils.isNumberInRange = (number, {min, max}) =>{
    return number >= min && number <= max
}

module.exports = utils