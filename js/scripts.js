$(document).ready(function(){

  $("button").click(function(event) {
    event.preventDefault();
  $("form").hide("slow");
  $("form").show();
  $("img").hide();



  var vArt = 0
  var vJava = 0
  var vPhp = 0
  var vNothing = 0

  var design = $("input:radio[name=one]:checked").val();
  console.log(design);
  var java = $("input:radio[name=two]:checked").val();
  console.log(java);
  var php = $("input:radio[name=three]:checked").val();
  console.log(php);
  var nothing = $("input:radio[name=four]:checked").val();
  console.log(nothing);

    if (design === "designYes") {
      vArt += 2
    }

    else if (java === "javaYes") {
      vJava += 3
    }

    else if (php ==="phpYes") {
      vPhp =+ 1
    }


    if (vNothing > vArt && vNothing > vJava && vNothing > vPhp) {
      alert("Programing isn't lame! Try Retaking the Survey");

    }


    else if (vArt > vJava && vArt > vNothing && vArt > vPhp) {
      $("#cssImg").show();
    }

    else if (vPhp > vNothing && vPhp > vArt && vPhp > vJava) {
      $("#p").show();

    }

    else if (vJava > vPhp && vJava > vArt && vJava > vNothing) {
      $("#javaImg").show();

    }

    else if (nothing === "programingLame"){
      vNothing += 100
    }


    $('input[type="radio"]').prop('checked', false);


  });
});
