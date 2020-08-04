$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
  $('form[id="repairorder"]').submit(function () {
    alert("Form submitted. Thank you!");
    window.location.reload(true);
    event.preventDefault();
  });
});

$(document).ready(function () {
  $('form[id="contact-form"]').submit(function () {
    $('#success').modal("show");
    $("form")[0].reset();
    $("form :input").attr("disabled", "disabled");
    event.preventDefault();
  });
});