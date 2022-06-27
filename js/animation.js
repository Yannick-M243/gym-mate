//Initializing variables to check if tables are showing or not
let isVisible = false;
let isVisible2 = false;

$(document).ready(function () {
  //This is a slide down animation for the index page
  $("#index").slideDown(1500);

  //hidding tables from the page nutrition by default
  $("#table-section").hide();
  $("#table-section2").hide();

  //when this button is clicked if the table is not showing it will shows it
  //and if the table is showing, it will hide it
  $("#section2 > button").click(function () {
    if (isVisible) {
      $("#table-section").slideUp(1000).hide(1000);
      isVisible = false;
    } else {
      $("#table-section").slideDown(1000).show(1000);
      isVisible = true;
    }
  });

  //when this button is clicked if the table is not showing it will shows it
  //and if the table is showing, it will hide it
  $("#section3 > button").click(function () {
    if (isVisible2) {
      $("#table-section2").slideUp(1000).slideUp(1000);
      isVisible2 = false;
    } else {
      $("#table-section2").slideDown(1000).show(1000);
      isVisible2 = true;
    }
  });
});
