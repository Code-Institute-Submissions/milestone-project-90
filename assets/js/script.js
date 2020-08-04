$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
  $("form").submit(function () {
    alert("Form submitted. Thank you!");
    window.location.reload(true);
  });
});
