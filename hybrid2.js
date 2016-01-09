    var hybrid = {
        type: 'h',
        initialCost:'',
        mpg:'',
        resale:'',
        totalCost:'',
        gasUsed:''
    };
    var normal = {
        type: 'n',
        initialCost:'',
        mpg:'',
        resale:'',
        totalCost:'',
        gasUsed:''
    };

var battleType;
var gasCost;
var milesDriven;

$(document).ready(function() {

    $('#fight').click(function() {

        battleType = $(".radio:checked").val();

        gasCost = $('#gas-cost').val();
        milesDriven = $('#num-miles').val();

        fillCar(hybrid);
        fillCar(normal);

    // normal.initialCost = $('#' + normal.type + '-initial-cost').val();
    // normal.mpg = $('#' + normal.type + '-mpg').val();
    // normal.resale = $('#' + normal.type + '-resale').val();
    //
    // hybrid.initialCost = $('#' + hybrid.type + '-initial-cost').val();
    // hybrid.mpg = $('#' + hybrid.type + '-initial-cost').val();
    // hybrid.resale = $('#' + hybrid.type + '-initial-cost').val();
    //
        console.log('battleType', battleType);
        console.log('normal', normal);
        console.log('hybrid', hybrid);
        console.log('gasCost', gasCost);
        console.log('milesDriven', milesDriven);

        if(gasCost == '' || milesDriven == '' || normal.initialCost == '' || normal.mpg == '' || normal.resale =='' || hybrid.initialCost == '' || hybrid.mpg == '' || hybrid.resale =='') {
            alert('Don\'t hold back, my friend, Fill up the stats!');
        }else {

        outputResults(hybrid);
        outputResults(normal);

        assignWinner(battleType);
    }

    function fillCar(car) {
        car.initialCost = $('#' + car.type + '-initial-cost').val();
        car.mpg = $('#' + car.type + '-mpg').val();
        car.resale = $('#' + car.type + '-resale').val();

        car.totalCost = cost(car);
        car.gasUsed = fuelConsumed(car);
    }

    function fuelConsumed(car) {
        var gallons = milesDriven / car.mpg;
        return gallons;
    }
    function cost(car) {
        var depreciation = car.initialCost - car.resale;
        var gallons = fuelConsumed(car);
        var costOfGas = gallons * gasCost;
        var totalCost = costOfGas + depreciation;

        return totalCost;
    }



    function outputResults(car) {
        var gallonElm = $('#' + car.type + '-results span')[0];
        var costElm = $('#' + car.type + '-results span')[1];

        // gallonElm.innerHTML = Math.round(car.gasUsed * 10) / 10; ???WHA?
        gallonElm.innerHTML = Math.round(car.gasUsed);
        costElm.innerHTML = '$' + Math.round(car.totalCost);
    }

    function assignWinner(battleType){
        if(battleType == 'gas') {
            if(hybrid.gasUsed <= normal.gasUsed) {
                $('#h-results').css('background-color', '#C98910');
                $('#n-results').css('background-color', '#A8A8A8');
            }else{
                $('#h-results').css('background-color', '#A8A8A8');
                $('#n-results').css('background-color', '#C98910');
            }
        }else{ //cost
            if(hybrid.totalCost <= normal.gasUsed) {
                $('#h-results').css('background-color', '#C98910');
                $('#n-results').css('background-color', '#A8A8A8');
            }else{
                $('#h-results').css('background-color', '#A8A8A8');
                $('#n-results').css('background-color', '#C98910');
            }

        }

    }
})
})
