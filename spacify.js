function spacify(str){

//break up the string into an array
	var sa = str.split('');
	sa = remsp(sa);
	//remove space elements with recursion
	function remsp(sar){
		
		sp = sar.indexOf(' ');
		if(sp >- 1){
			sar.splice(sp,1);
			remsp(sar);
		}

		return sar;
	}
	//Combine elements with spaces
		sa = sa.join(' ');
		return sa;
}



