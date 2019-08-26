// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour-it").on("click", function(event) {
    var id = $(this).data("id");
    var isDevoured = $(this).data("isdevoured");
    console.log(isDevoured)
    if(isDevoured){
      isDevoured=false;
    }else{
      isDevoured=true;
    }

    var changeBurgerStatus = {
      devoured: isDevoured
    };

    console.log(changeBurgerStatus);
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: changeBurgerStatus
    }).then(
      function() {
        console.log("New Burger", isDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger_name").val().trim(),
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