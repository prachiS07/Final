

var db = firebase.firestore();

	
function storeData(){

	var inputText = document.getElementById("nameField").value;
	var emailText = document.getElementById("emailField").value;
	var dobText = document.getElementById("DOB").value;
	var addText = document.getElementById("addField").value;
	var numText = document.getElementById("number").value;


	
		

	var inputGender = 
	document.querySelector('input[name="Gender"]:checked').value;
	var inputMarS= 
	document.querySelector('input[name="marS"]:checked').value;


		
	db.collection("Users").doc().set({
	    name: inputText,
	    email: emailText,
	    dob: dobText,
	    gender: inputGender,
	    maritial: inputMarS,
	    address: addText,
	    number: numText



	    
	   


	    


	})
	.then(function() {
	    console.log("Document successfully written!");
	})
	.catch(function(error) {
	    console.error("Error writing document: ", error);
	});



}
