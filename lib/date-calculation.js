function formatTime (time, symbol) {
    var date = new Date(time)
    var y = date.getFullYear()
    var m = date.getMonth() + 1
    var d = date.getDate()
    m = m > 10 ? m : '0' + m
    d = d > 10 ? d : '0' + d
    var weekArr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    var w = weekArr[date.getDay()]
    return y + symbol + m + symbol + d + " " + w
}

/**
 * 根据输入的时间和天数推算要计算的日期
 * @param {*} startTime  开始时间:日期对象或时间戳
 * @param {*} num 数值
 * @param {*} dateType 计算的类型  默认值1 -->   1 表示天数 2表示星期 3表示月 
 * @param {*} isExtrapolateBack 是否往后推算 默认true,如需往前推算传入false
 * @param {*} symbol 输出日期的连接符
 * 例如 参数{'2022/01/12', 40 , 1 }  则表示2022/01/12 往后 40 天  --->   2022/02/21 星期一
 */

function dateCalculation ({
    startTime = null,
    num,
    dateType = 1,
    isExtrapolateBack = true,
    symbol = '/'
}) {
    if (new Date(startTime).toString() === 'Invalid Date') throw ('Invalid Date')
    var calaMethod = isExtrapolateBack ? 1 : -1
    var date = new Date(startTime)
    if (dateType == 3) {
        date.setMonth(date.getMonth() + calaMethod * num)
        return formatTime(date, symbol)
    } else {
        var timeStamp = num * 24 * 3600 * 1000
        if (dateType == 2) timeStamp *= 7
        var t = date.getTime() + calaMethod * timeStamp
        return formatTime(t, symbol)
    }
}

module.exports = dateCalculation