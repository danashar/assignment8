window.Activity = {};

var isWinter = function(month){
    var month = date_utils.months.indexOf(month);
    return month >= 0 && month < 3 || month === 11;
}

Activity.getActivityMessage = function(month){
    return isWinter(month) ? "if it is not too cold" : "";
}