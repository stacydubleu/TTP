$(document).ready(function(){
	function JukeBox(){
		var count=0;
		var songList=["Ocean.mp3","Heart.mp3", "FlorBackAgain.mp3"];
		var bool=false;
		var image=document.getElementById("playButton");
		var audio = document.getElementById("music");
		this.playSong = function(){ 
			if (audio.src !== songList[count]) { 
				audio.src = songList[count]; 
				document.getElementById("songName").textContent=songList[count].split(".")[0];
			}
			if(bool==false){
				audio.play();
				image.src="play.jpeg";
				bool=true;
			}
			else {
				audio.pause();
				image.src="pause.png";
				bool=false;
			}
		}
		this.next=function(){
			count=(count+1)%3;
			document.getElementById("songName").textContent=songList[count].split(".")[0];
			if(bool==true){
				audio.pause(); 
				bool==false;
				image.src="pause.png";
			}
		}

		this.playSingle = function(input){
			var song = input;
			if (audio.src !== song) { 
				document.getElementById("songName").textContent=song.split(".")[0];
				audio.src = song; 
			}
			if(bool==false){
				audio.play();
				image.src="play.jpeg";
				bool=true;
			}
		}

		this.pause = function(input){
			var song=input;
			if(audio.src!==song){
				document.getElementById("songName").textContent=song.split(".")[0];
				audio.src = song; 
			}
			if(bool==true){
				audio.pause();
				image.src="pause.png";
				bool=false;
			}
		}
	}
	
	var JukeBox = new JukeBox();
	document.getElementById("playButton").onclick=function(){ JukeBox.playSong()};
	document.getElementById("nextButton").onclick=function(){ JukeBox.next()};
	$('#playO').on('mouseover',function(){
		JukeBox.playSingle("Ocean.mp3");
	})
	$('#playO').on('mouseout',function(){
		JukeBox.pause("Ocean.mp3");
	})
	$('#playH').on('mouseover',function(){
		JukeBox.playSingle("Heart.mp3");
	})
	$('#playH').on('mouseout',function(){
		JukeBox.pause("Heart.mp3");
	})
	$('#playK').on('mouseover', function(){
		JukeBox.playSingle("FlorBackAgain.mp3");
	})
	$('#playK').on('mouseout', function(){
		JukeBox.pause("FlorBackAgain.mp3");
	})
});