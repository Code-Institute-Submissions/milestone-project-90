$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
  $('#repair-order').submit(function () {
    $('#repair-order-success').modal("show");
    $('#repair-order')[0].reset();
    $('#staticBackdrop').modal('hide');
    $("#repair-order :input").attr("disabled", "disabled");
    event.preventDefault();
  });
});

$(document).ready(function () {
  $('#contact-form').submit(function () {
    $('#contact-form-success').modal("show");
    $("#contact-form")[0].reset();
    $("#contact-form :input").attr("disabled", "disabled");
    event.preventDefault();
  });
});