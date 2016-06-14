$(document).ready(function(){
  $("#search").keyup("submit",function(e){ //replace keyup with on
    e.preventDefault();
    var formData = {
      'q'              : $('input[name=q]').val(),
      'type'             : $('input[name=type]').val()
    };
    $.ajax({
      type: "GET",
      url: 'https://api.spotify.com/v1/search',
      data: formData,
      success: function (response) {
        var artistArray= response.artists.items; 
        for(var i = 0 ; i<artistArray.length; i++){
          for(var j = 0; j<artistArray[i].images.length; j++){
            console.log(artistArray[i].images[j].url);
            console.log(artistArray[i].name);
            var img = new Image();
            img.src = artistArray[i].images[j].url;
            img.width= artistArray[i].images[j].width;
            img.height=artistArray[i].images[j].height;
            div1.appendChild(img);
            var div = document.getElementById('div1');
            var name = document.createTextNode(artistArray[i].name);
            div.appendChild(name);
          }
        }
      }
    });
  });
});
