
function validateForm(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	

	if((/\d/.test(username))==false){
		alert('Needs to have a number.');
		
	}
	else if(password!="12345678"){
		alert('Password needs to be 12345678');
		
	}
	else{
		document.getElementById('main-content').innerHTML="<h1>Welcome " + username + ". </h1>";
		
	}
	return false; //submit buttons sends data return of false will not reload the page
	//changes the div main-content in the html file to output a header such as welcome...etc. DOM manipulation
}