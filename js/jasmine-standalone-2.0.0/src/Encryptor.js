function Encryptor() {

}

Encryptor.prototype.encrypt = function(text, key) {

	if(text	== ""){
		return "";
	}

	each_letter_code = [];
	each_coded_letter = [];

	for(var i=0; i < text.length ; i++) {
		each_letter_code.push(text.charCodeAt(i));
	}
	debugger
	for (var i = 0; i < each_letter_code.length; i++) {
		each_coded_letter.push(String.fromCharCode(each_letter_code[i]+key));
	}

	return each_coded_letter.join("");
};

