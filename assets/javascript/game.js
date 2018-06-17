$( document ).ready(function(){
    //select a random number between 19-120 to be shown at the start of the game
    var Random=Math.floor(Math.random()*101+19)
    //appending random number to the randomNumber id in the html doc
    $('#randomNumber').text(Random);
    //setting up random numbers between 1-12 for each crystal
    var number1= Math.floor(Math.random()*11+1)
    var number2= Math.floor(Math.random()*11+1)
    var number3= Math.floor(Math.random()*11+1)
    var number4= Math.floor(Math.random()*11+1)
    //declaring variables for scores
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
    
    //reset function
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        number1= Math.floor(Math.random()*11+1);
        number2= Math.floor(Math.random()*11+1);
        number3= Math.floor(Math.random()*11+1);
        number4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
  //add wins to the userTotal
  function winner(){
  alert("You win!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //add losses to the userTotal
  function loser(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //add click events for crystal 1
    $('#one').on ('click', function(){
      userTotal = userTotal + number1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        //set win/lose conditions for crystal 1
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
        //repeat for number 2,3,4
    $('#two').on ('click', function(){
      userTotal = userTotal + number2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + number3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
  
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + number4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 