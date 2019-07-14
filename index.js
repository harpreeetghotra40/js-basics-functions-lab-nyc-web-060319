// Code your solution in this file!
var requiredBlock = 42;
function distanceFromHqInBlocks(numValue){
    return Math.abs(requiredBlock - numValue);
}

function distanceFromHqInFeet(numValue){
    return distanceFromHqInBlocks(numValue)*264;
}

function distanceTravelledInFeet(from, to){
    requiredBlock = from;
    return distanceFromHqInFeet(to);
}

function calculatesFarePrice(from, to){
    var travelDistance = distanceTravelledInFeet(from,to);
    if(travelDistance < 400){
        return 0;
    }else if(travelDistance < 2000 && travelDistance > 400){
        travelDistance -= 400;
        var cost = travelDistance * 0.02;
        return cost;
    }else if(travelDistance > 2000 && travelDistance < 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}