$(document).ready(function(){
  $("button").click(function(event) {
    event.preventDefault();
  $("form").hide("slow");
  $("output").show;

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
    vArt += 1
  }

  if (java === "javaYes") {
    vJava += 1
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

  console.log(vArt);
  console.log(vJava);
  console.log(vPhp);
  console.log(vNothing);

  $('input[type="radio"]').prop('checked', false);

  });
});
