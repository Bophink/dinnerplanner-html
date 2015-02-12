//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	model.addDishToMenu(1);
	//this.dishPrice = container.find("#dishPrice");
	//this.menuPrice = container.find("#menuPrice");
	//this.dishName = container.find("#dishName");
	

	var dishPrice = 0;
	var dish = model.getDish(1)
	for (i in dish.ingredients) {
		dishPrice = dishPrice + dish.ingredients[i].price;
		//console.log(dish.ingredients[i].name+" "+dish.ingredients[i].price)
	}


	menu = model.menu;
	for (dish in menu) {
		currentDish = dish + "Dish";
		if (currentDish != null) {
			var dishName = document.createTextNode(model.menu[currentDish]);
			var dishPrice = document.createTextNode(model.menu[currentDish]);
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");
			td1.appendChild(dishName);
			td2.appendChild(dishPrice);
			document.getElementById(currentDish).appendChild(td1);
			document.getElementById(currentDish).appendChild(td2);
			console.log("hej1");

		}
		else {
			document.getElementById(currentDish).appendChild("td1");
			document.getElementById(currentDish).appendChild("td2");	
			console.log("hej2");
		}
	}
	// LÄGG IN NAMN OCH PRIS I LISTAN MED DIVAR I TABELLEN!=!=!=! SADLLAÖÄSKF 

	model.addDishToMenu(201);
	console.log(model.menu);


	this.numberOfGuests.html(model.getNumberOfGuests());
	//this.dishPrice.html(dishPrice);
	//this.menuPrice.html(model.getTotalMenuPrice);
	//this.dishName.html(model.menu)



}
 
