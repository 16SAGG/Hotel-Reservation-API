const { getNumericDateWithoutTime } = require("./utils")

const values = {}

values.secondsPerDay = 86400
values.millisecondsPerDay = 86400000

values.currentDate = getNumericDateWithoutTime(Date.now())
values.tomorrowDate = getNumericDateWithoutTime(values.currentDate + values.millisecondsPerDay)

module.exports = values