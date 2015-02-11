//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	//this.dishPrice = container.find("#dishPrice");
	//this.menuPrice = container.find("#menuPrice");
	//this.dishName = container.find("#dishName");
	

	var dishPrice = 0;
	for (i in model.getDish(1).ingredients) {
		dishPrice = dishPrice + model.getDish(1).ingredients[i].price;
	}


	menu = model.menu;
	for (dish in menu) {
		currentDish = dish + "Dish";
		if (currentDish != )
	}
	// LÄGG IN NAMN OCH PRIS I LISTAN MED DIVAR I TABELLEN!=!=!=! SADLLAÖÄSKF 

	//model.addDishToMenu(201);


	this.numberOfGuests.html(model.getNumberOfGuests());
	//this.dishPrice.html(dishPrice);
	//this.menuPrice.html(model.getTotalMenuPrice);
	//this.dishName.html(model.menu)



}
 
