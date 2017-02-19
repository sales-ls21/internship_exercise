document.getElementById("userInput").focus();

var submit = document.getElementById("submit");
submit.addEventListener("click", updateArray);

function updateArray(){ 
	var input = document.getElementById("userInput").value;
	if (input.indexOf('{') > -1 || input.indexOf('}') > -1){
		alert("You have entered an invalid character. '{}' is not allowed.")
		document.getElementById("userInput").focus();		
		document.getElementById("userInput").value = '';		
		return;
	} if (input === ''){
		alert("You must enter a value.");
		document.getElementById("userInput").focus();
		document.getElementById("userInput").value = '';		
		return;
	} else {
		document.getElementById("userInput").focus();
		input = input.replace(/[\[\]']+/g,'');
		input = input.split(",");
		console.log(input);
			for (var i=0; i < input.length; i++){
				if (input[i] === '' && input[i].indexOf('@') !== -1 || input[i].indexOf('.') !== -1){
					input[i] = 'email';
				} else if (input[i] % 3 === 0 && input[i] % 5 === 0){
					input[i] = " 'fizz buzz'";
				} else if(input[i] % 3 === 0){
					input[i] = " 'fizz'";
				} else if(input[i] % 5 === 0){
					input[i] = "'buzz'";
				} else if (input[i] % 3 !== 0 && input[i] % 5 !== 0){
					input[i] = "'" + input[i] + "'";
				} else if (input[i] === '' && input[i].indexOf('@') !== -1 || input[i].indexOf('.') !== -1){
					input[i] = "'email'";
				}
			}	
	}
	console.log(input);
	var output = document.getElementById("output");
	output.innerHTML = "[" + input + "]";
}