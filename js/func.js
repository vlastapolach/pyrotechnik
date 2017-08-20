$(document).ready( function() {

  var guesCount = 0;
  var display = $(".display");
  display.html("");
  printTimer = 59;
  lessThanTen = ""

  goodResult1 = false;
  goodResult2 = false;
  goodResult3 = false;
  goodResult4 = false;

  getNumber = function(){
    number1 = Math.floor(Math.random()* 10) ;
    number2 = Math.floor(Math.random()* 10) ;
    number3 = Math.floor(Math.random()* 10) ;
    number4 = Math.floor(Math.random()* 10) ;
  };

  getNumber();

  //if the input is more than 4 digits, reset it
  var checkLength = function() {
    if ($(".display").text().length > 3) {
      display.html("");
    }
  };

  secondsTimer = setInterval(boomTimer, 1000);
  function boomTimer() {

    $(".boomTimer").text(printTimer);
    if (printTimer < 1) {
      boomScreen();
    }
    if (printTimer < 10) {
      $(".boomTimer").text("0" + printTimer);
      lessThanTen = "0";
    }
    printTimer -=1;
  }



  winScreen = function() {
    $("#content").html(`
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-6">
              <a href="game.html"><img src="img/win.jpg" class="img-responsive screen-img" alt ="Pyrotechnik"/></a>
                <a href="game.html" class="btn btn-danger button-start btn-lg">Hrát znovu</a>
            </div>
            <div class="col-sm-6">
              <p class="text-center good-luck">Gratulujeme!</p>
              <p>Bomba je zneškodněna! Dnes nic nevybouchne - ne pod tvým dohledem! </p>
              <p><strong>Počet pokusů k zneškodnění bomby: <span class="red">` + guesCount + `</span></strong><br /> <strong>Čas do výbuchu: <span class="red">0:` + lessThanTen + printTimer + `</span></strong></p>
            </div>
          </div>
        </div>
      `);
      clearInterval(secondsTimer);
  }

  boomScreen = function() {
    $("#content").html(`
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-6">
              <a href="game.html"><img src="img/loose.jpg" class="img-responsive screen-img" alt ="Pyrotechnik"/></a>
                <a href="game.html" class="btn btn-danger button-start btn-lg">Hrát znovu</a>
            </div>
            <div class="col-sm-6">
              <p class="text-center good-luck">Neeeeeeee!</p>
              <p>Bomba se odpálila!</p>
            </div>
          </div>
        </div>
      `);
      clearInterval(secondsTimer);
  }



  $("#1").click(function() {
    checkLength();
    display.append("1");
  });
  $("#2").click(function() {
    checkLength();
    display.append("2");
  });
  $("#3").click(function() {
    checkLength();
    display.append("3");
  });
  $("#4").click(function() {
    checkLength();
    display.append("4");
  });
  $("#5").click(function() {
    checkLength();
    display.append("5");
  });
  $("#6").click(function() {
    checkLength();
    display.append("6");
  });
  $("#7").click(function() {
    checkLength();
    display.append("7");
  });
  $("#8").click(function() {
    checkLength();
    display.append("8");
  });
  $("#9").click(function() {
    checkLength();
    display.append("9");
  });
  $("#0").click(function() {
    checkLength();
    display.append("0");
  });

  $("#ok").click(function() {


    if ($(".display").text().length > 3) {
      testValue = $(".display").text();
      addText = $(".display").text();

      guesCount++;

      if (guesCount == 1) {
      $("#res1u").text(addText);
      $(".try").text("1");
      $("#res1d").children().addClass("current");
      }
      else if (guesCount == 2) {
      $("#res2u").text(addText);
      $(".try").text("2");
      $("#res1d").children().removeClass("current");
      $("#res2d").children().addClass("current");
      }
      else if (guesCount == 3) {
      $("#res3u").text(addText);
      $(".try").text("3");
      $("#res1d").children().removeClass("current");
      $("#res2d").children().removeClass("current");
      $("#res3d").children().addClass("current");
      }
      else if (guesCount == 4) {
      $("#res4u").text(addText);
      $(".try").text("4");
      $("#res1d").children().removeClass("current");
      $("#res2d").children().removeClass("current");
      $("#res3d").children().removeClass("current");
      $("#res4d").children().addClass("current");
      }
      else if (guesCount == 5) {
      $("#res5u").text(addText);
      $(".try").text("5");
      $("#res1d").children().removeClass("current");
      $("#res2d").children().removeClass("current");
      $("#res3d").children().removeClass("current");
      $("#res4d").children().removeClass("current");
      $("#res5d").children().addClass("current");
      }
      else if (guesCount == 6) {
      $("#res6u").text(addText);
      $(".try").text("6");
      $("#res1d").children().removeClass("current");
      $("#res2d").children().removeClass("current");
      $("#res3d").children().removeClass("current");
      $("#res4d").children().removeClass("current");
      $("#res5d").children().removeClass("current");
      $("#res6d").children().addClass("current");
      }
      else if (guesCount == 7) {
      $("#res7u").text(addText);
      $(".try").text("7");
      $("#res1d").children().removeClass("current");
      $("#res2d").children().removeClass("current");
      $("#res3d").children().removeClass("current");
      $("#res4d").children().removeClass("current");
      $("#res5d").children().removeClass("current");
      $("#res6d").children().removeClass("current");
      $("#res7d").children().addClass("current");
      }
      else if (guesCount == 8) {
      $("#res8u").text(addText);
      $(".try").text("8");
      $("#res1d").children().removeClass("current");
      $("#res2d").children().removeClass("current");
      $("#res3d").children().removeClass("current");
      $("#res4d").children().removeClass("current");
      $("#res5d").children().removeClass("current");
      $("#res6d").children().removeClass("current");
      $("#res7d").children().removeClass("current");
      $("#res8d").children().addClass("current");
      }
      else if (guesCount == 9) {
      $("#res9u").text(addText);
      $(".try").text("9");
      $("#res1d").children().removeClass("current");
      $("#res2d").children().removeClass("current");
      $("#res3d").children().removeClass("current");
      $("#res4d").children().removeClass("current");
      $("#res5d").children().removeClass("current");
      $("#res6d").children().removeClass("current");
      $("#res7d").children().removeClass("current");
      $("#res8d").children().removeClass("current");
      $("#res9d").children().addClass("current");
      }
      else if (guesCount == 10) {
      $("#res10u").text(addText);
      $(".try").text("10");
      $("#res1d").children().removeClass("current");
      $("#res2d").children().removeClass("current");
      $("#res3d").children().removeClass("current");
      $("#res4d").children().removeClass("current");
      $("#res5d").children().removeClass("current");
      $("#res6d").children().removeClass("current");
      $("#res7d").children().removeClass("current");
      $("#res8d").children().removeClass("current");
      $("#res9d").children().removeClass("current");
      $("#res10d").children().addClass("current");
      guesCount++;
      }



      if (addText[0] == number1) {
        $(".pos1").filter( ".current" ).text("=");
        $(".pos1").filter( ".current" ).addClass("pos-yes");
        goodResult1 = true;
      }
      else if (addText[0] == number2 || addText[0] == number3 || addText[0] == number4 ) {
        $(".pos1").filter( ".current" ).text("?");
        $(".pos1").filter( ".current" ).addClass("pos-maybe");
      }
      else {
        $(".pos1").filter( ".current" ).text("x");
        $(".pos1").filter( ".current" ).addClass("pos-no");
      }

      if (addText[1] == number2) {
        $(".pos2").filter( ".current" ).text("=");
        $(".pos2").filter( ".current" ).addClass("pos-yes");
        goodResult2 = true;
      }
      else if (addText[1] == number1 || addText[1] == number3 || addText[1] == number4 ) {
        $(".pos2").filter( ".current" ).filter( ".current" ).text("?");
        $(".pos2").filter( ".current" ).addClass("pos-maybe");
      }
      else {
        $(".pos2").filter( ".current" ).text("x");
        $(".pos2").filter( ".current" ).addClass("pos-no");
      }

      if (addText[2] == number3) {
        $(".pos3").filter( ".current" ).text("=");
        $(".pos3").filter( ".current" ).addClass("pos-yes");
        goodResult3 = true;
      }
      else if (addText[2] == number1 || addText[2] == number2 || addText[2] == number4 ) {
        $(".pos3").filter( ".current" ).text("?");
        $(".pos3").filter( ".current" ).addClass("pos-maybe");
      }
      else {
        $(".pos3").filter( ".current" ).filter( ".current" ).text("x");
        $(".pos3").filter( ".current" ).addClass("pos-no");
      }

      if (addText[3] == number4) {
        $(".pos4").filter( ".current" ).text("=");
        $(".pos4").filter( ".current" ).addClass("pos-yes");
        goodResult4 = true;
      }
      else if (addText[3] == number1 || addText[3] == number2 || addText[3] == number3 ) {
        $(".pos4").filter( ".current" ).text("?");
        $(".pos4").filter( ".current" ).addClass("pos-maybe");
      }
      else {
        $(".pos4").filter( ".current" ).text("x");
        $(".pos4").filter( ".current" ).addClass("pos-no");
      }

      $(".display").text("")

      if (goodResult1 && goodResult2 && goodResult3 && goodResult4) {
        winScreen();
      }

      if (guesCount == 11) {
        boomScreen();
      }

    }
  });

  // Print actual year into the footer
  var year = new Date();
  $(".foot-link").text(year.getFullYear());

});
