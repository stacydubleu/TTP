function validateForm(){
    var username = document.getElementById('username').value;
    if(Cookies.get(username)==null){
    	Cookies.set(username, "Hello");
 	 //submit buttons sends data return of false will not reload the page
    }
    if(Cookies.get(username)!=null){
    	document.getElementById('main-content').innerHTML="<h1>Welcome " + username+ ". You already ate cookies. </h1>";
    }
    return false;
}
