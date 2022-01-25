class User {
	callFromUser() {
		console.log('from extension - User')
	}
	
	returnUser(){
		console.log('returnUser - User')
		return {
			id: "0",
			name: "Vue",
			age: "immortal"
		}
	}
}

export const userClass = () => {
	return new User();
}
