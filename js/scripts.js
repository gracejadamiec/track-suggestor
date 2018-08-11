$(document).ready(function(){

  $("button").click(function(event) {
    event.preventDefault();
  $("form").hide("slow");

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

    if (java === "javaYes") {
      vJava += 3
    }

    if (php ==="phpYes") {
      vPhp =+ 1
    }

    if (nothing === "programingLame"){
      vNothing += 100
    }

    if (vNothing > vArt && vNothing > vJava && vNothing > vPhp) {
      alert("Programing isn't lame! Try Retaking the Survey");
    }


    if (vArt > vJava && vArt > vNothing && vArt > vPhp) {
      $("#cssImg").show();

    }

    if (vPhp > vNothing && vPhp > vArt && vPhp > vJava) {
      alert("You Should try Learning PHP!");
      // $("#p").show(); I could NOT get this to work!
    }

    if (vJava > vPhp && vJava > vArt && vJava > vNothing) {
      // alert("Java");
      $("#javaImg").show();
    }

    console.log(vArt);
    console.log(vJava);
    console.log(vPhp);
    console.log(vNothing);

    $('input[type="radio"]').prop('checked', false);

    });
});
