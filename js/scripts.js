$(document).ready(function(){
  $("button").click(function(event) {
    event.preventDefault();
  $("form").hide("slow");
  $("output").show;

  var vArt = 0
  // var vJava = 0
  // var vPhp = 0
  // var hatescoding = 0

  var design = $("input:radio[name=first]:checked").val();
  console.log(design);
  var java = $("input:radio[name=second]:checked").val();
  console.log(java);
  var php = $("input:radio[name=third]:checked").val();
  console.log(php);
  var nothing = $("input:radio[name=fourth]:checked").val();
  console.log(nothing);

  if (design === "designYes") {
    vArt += 1
  }

  console.log(vArt);

  $('input[type="radio"]').prop('checked', false);

  });
});
