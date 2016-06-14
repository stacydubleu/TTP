$(document).ready(function(){
  SC.initialize({
    client_id: "76a808222b91b5fb454ef550c27bc2a5",
  });

  $("#hover").on('mouseover', function() {
    var player = $("#player");
    console.log("help");
    SC.oEmbed('https://soundcloud.com/lin-ochoa/in-the-yard', {
      maxheight: 200
    }, function(res) {
      $("#player").html(res.html);
    });
  });
});
