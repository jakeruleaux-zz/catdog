$(document).ready(function() {
  $("button#cat-talk").click(function() {
    $("h4#cat-says").after("<p>meow!</p>");
    $("h4#dog-says").after("<p>bark!</p>");
  });
  $("button#dog-talk").click(function() {
    $("h4#cat-says").after("<p>meow!</p>");
    $("h4#dog-says").after("<p>bark!</p>");
  });
});
