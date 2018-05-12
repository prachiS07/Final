var db = firebase.firestore();

function contactData(){
	
	var inputText =  document.getElementById("contactBtn").value;




	db.collection("Doctors").doc().set({
	    contact: inputText 



	    
	   


	    


	})
	.then(function() {
	    console.log("Document successfully written!");
	})
	.catch(function(error) {
	    console.error("Error writing document: ", error);
	});




}
