class Product{
	callFromProduct() {
		console.log('from extension - PRODUCT')
	}
	
	returnProduct(){
		console.log('returnProduction - PRODUCT')
		return {
			id: "0",
			name: "NPM",
			price: "$7"
		}
	}
}

export const productClass = () => {
	return new Product();
}