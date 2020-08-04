$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
  $('form[id="repairorder"]').submit(function () {
    alert("Form submitted. Thank you!");
    window.location.reload(true);
  });
});
