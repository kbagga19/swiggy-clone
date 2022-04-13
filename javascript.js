$(function () { 
    count = 0; 
    wordsArray = ["Movie marathon?", "Game Night?", "Late night at office?", "Unexpected guests?", "Cooking gone wrong?"]; 
    setInterval(function () { 
      count++; 
      $("#changes").fadeOut(250, function () { 
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(250); 
      }); 
    }, 3000); 
  }); 