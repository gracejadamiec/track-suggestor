$(document).ready(function(){
  $("button").click(function(event) {
    event.preventDefault();
  $("form").hide("slow");
  $("output").show;

  $('input[type="radio"]').prop('checked', false);
});

  console.log(survey);
    // if submit is clicked, show output, and hide survey
    //  if () {
    //   $('survey').hide();
    //   $('survey').show();
    //  } else {
    //   $('survey').hide();
    //   $('survey').show();
    // }
  });
