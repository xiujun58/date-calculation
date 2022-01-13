# date-calculation
输入日期及天数推算往后或往前目标日期


## Install
npm install date-calculation -S

## Quick Start
- import dateCalculation from "date-calculation" ;
- const value = dateCalculation({
-    startTime:'2022/1/13',
-    num:50
- })
-  --> 2022/03/04 星期五

## Params
- startTime (开始时间) :日期对象或时间戳
- num (数值)
- dateType (计算的类型)  默认值1 -->  可选: 1 表示天数 2表示星期 3表示月 
- isExtrapolateBack (是否往后推算) 默认true ---> 可选false 如需往前推算传入false
- symbol (输出日期的连接符) 默认'/'
