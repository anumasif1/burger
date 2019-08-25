// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#submit").on("click", function(event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newBurger");
    console.log(newBurger)

    var newBurgerOrder = {
      burger_name: newBurger
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerOrder
    }).then(
      function() {
        console.log("New Burger", newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".form-group").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#id").val().trim(),
    //   devoured: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});