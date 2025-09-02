// code your solution here
function saturdayFun(bathemydog="roller-skate"){
return `This Saturday, I want to ${bathemydog}!`;
}
//function mondaywork
function mondayWork(workfromhome="go to the office"){
    return`This Monday, I will ${workfromhome}.`;
}
// depending on the symbol declared you'll get the required statement
function wrapAdjective(symbol){
    return function(adjective){
        return `You are ${symbol}${adjective}${symbol}!`
    }
}
    