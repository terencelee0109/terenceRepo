function callFromUser() {
	console.log('from extension - User')
}

function returnUser(){
	console.log('returnUser - User')
	return {
		id: "0",
		name: "Vue",
		age: "immortal"
	}
}