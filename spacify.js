function spacify(stringIn){

//break up the string into an array
	var stringArray = stringIn.split('');
	stringArray = remSpaces(stringArray);
	//remove space elements with recursion
	function remSpaces(stringArrayIn){
		
		spaceIdx = stringArrayIn.indexOf(' ');
		if(spaceIdx > -1){
			stringArrayIn.splice(spaceIdx,1);
			remSpaces(stringArrayIn);
		}

		return stringArrayIn;
	}
	//Combine elements with spaces
	var stringOut = stringArray.join(' ');
	return stringOut;
}



