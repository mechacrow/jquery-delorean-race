// click the go button
$('#go').click(function() {
   
    // build a function that checks to see if a car has won
    function checkIfComplete() {
        
        if( isComplete == false ) {
            isComplete = true;
        } else {
            place = 'second';
        }
    }
    
    
    // get the width of the cars
    var carWidth = $('#car1').width();
    
    // get the width of the racetrack
    var raceTrackWidth = $(window).width() - carWidth;
    
    // generate a random number, 1 and 5000
    
    var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
    var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );
    
    // set flag variable to False by default
    var isComplete = false;
    
    // set a flag variable to First by default
    var place = 'first';
    
    // animate car 1 
    $('#car1').animate({
        
        // move the car width of the track 
        left: raceTrackWidth
        
    }, raceTime1, function() {
       
        // animation is complete
        
        // run a function
        checkIfComplete();
        
        // give some text feedback in the race into box
        $('#raceInfo1 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds' );
        
    });
    
    // animate car 2 
    $('#car2').animate({
        
        // move the car width of the track 
        left: raceTrackWidth
        
    }, raceTime2, function() {
       
        // animation is complete
        
        // run a function
        checkIfComplete();
        
        // give some text feedback in the race into box
        $('#raceInfo2 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds' );
        
    });
    
});

    // reset the race
    $('#reset').click(function() {
        $('.car').css('left', '0');
        $('.raceInfo span').text('');
    });