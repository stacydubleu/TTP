$(document).ready(function(){
  SC.initialize({
    client_id: "76a808222b91b5fb454ef550c27bc2a5",
  });

  $("#hover").on('mouseover', function() {
    var player = $("#player");
    console.log("help");
    var track_url = 'http://soundcloud.com/forss/flickermood';
    SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
    console.log('oEmbed response: ', oEmbed);
    });
  });
});
