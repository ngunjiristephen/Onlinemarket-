$(document).ready(function() {
    $("form").submit(function(event) {
      var fullName = $("input#fullname").val();
      var Address = $("input#address").val();

      $(".fullName").text(fullName);
      $(".address").text(Address);

      $("#info").show();
      $("#userdetails").hide();
      event.preventDefault();
      });
});
