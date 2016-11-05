$("#search").on("click", function() {
$("#searchCriteria").keypress(function(e) {
  if (e.which == 13) {
    $('#search').trigger('click');
  }
  });
  var searchCriteria = $("#searchCriteria").val();
  console.log(searchCriteria);
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchCriteria + "&format=json&callback=?";
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    async: true,
    success: function(data, status, jqXHR) {
      $("#output").html();
      for (var i = 0; i < data[1].length; i++) {
        $("#output").prepend("<div><div class='well'><a href=" + data[3][i] + "><h2 class='font-color'>" + data[1][i] + "</h2>" + "<p class='font-color'>" + data[2][i] + "</p></a></div></div>");
      }
    }
  })
})

