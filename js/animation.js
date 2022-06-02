let isVisible = false;
let isVisible2 = false;

$(document).ready(function () {
  $("#index").slideDown(1500);

  $("#table-section").hide();
  $("#table-section2").hide();

  $("#section2 > button").click(function () {
    if (isVisible) {
      $("#table-section").hide();
      isVisible = false;
    } else {
      $("#table-section").show();
      isVisible = true;
    }
  });

  $("#section3 > button").click(function () {
    if (isVisible2) {
      $("#table-section2").hide();
      isVisible2 = false;
    } else {
      $("#table-section2").show();
      isVisible2 = true;
    }
  });
});
