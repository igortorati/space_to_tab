function convert() {
	const spaceAmount = document.getElementById("number-spaces").value;
	var rx = new RegExp(" {" + spaceAmount + "}", "g");
	document.getElementById("converter-input").value = document.getElementById("converter-input").value.replace(rx, "\t");

	copy();
}

function copy() {
	var text = document.getElementById("converter-input");
	text.select();
	text.setSelectionRange(0, 999999);

	document.execCommand("copy");
}