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



/*
	var fullMenu = model.getFullMenu();
	for (dish in fullMenu) {
		try {
			var currentDish = String(dish.type) + "Dish";
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
		catch(e) {
			console.log("Det gick åt helvete");
		}
	}
*/


	// LÄGG IN NAMN OCH PRIS I LISTAN MED DIVAR I TABELLEN!=!=!=! SADLLAÖÄSKF 

	model.addDishToMenu(1);
	model.addDishToMenu(201);
	model.addDishToMenu(200);
	console.log("model.getFullMenu()");
	var fullMenu = model.getFullMenu();
	console.log(fullMenu);


	var fullMenu = model.getFullMenu();
	for (dish in fullMenu) {
		try {
			if (fullMenu[dish] != "") {
				var dishName = document.createTextNode(fullMenu[dish].name);
				var dishPrice = document.createTextNode(model.getDishPrice(fullMenu[dish].id));
				var td1 = document.createElement("td");
				var td2 = document.createElement("td");
				td1.appendChild(dishName);
				td2.appendChild(dishPrice);
				document.getElementById(String (fullMenu[dish].type) + "Dish").appendChild(td1);
				document.getElementById(String (fullMenu[dish].type) + "Dish").appendChild(td2);
				

			}
			else {
				document.getElementById(String (fullMenu[dish].type) + "Dish").appendChild("td1");
				document.getElementById(String (fullMenu[dish].type) + "Dish").appendChild("td2");	
				console.log("hej2");
			}			
		}
		catch(e) {
			console.log("Det gick åt helvete");
		}
	}






	//console.log(model.menu["starter"]);


	this.numberOfGuests.html(model.getNumberOfGuests());
	//this.dishPrice.html(dishPrice);
	//this.menuPrice.html(model.getTotalMenuPrice);
	//this.dishName.html(model.menu)



}
 
