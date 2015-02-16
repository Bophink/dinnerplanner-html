//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.menuPrice = container.find("#menuPrice");
	//this.dishPrice = container.find("#dishPrice");
	//this.menuPrice = container.find("#menuPrice");
	//this.dishName = container.find("#dishName");
	
	this.doView = function(){
		var dishPrice = 0;
		for (i in model.getDish(1).ingredients) {
			dishPrice = dishPrice + model.getDish(1).ingredients[i].price;
		}



		model.addDishToMenu(1);
		model.addDishToMenu(200);
		
		console.log("model.getFullMenu()");
		var fullMenu = model.getFullMenu();
		console.log(fullMenu);


		var fullMenu = model.getFullMenu();
		document.getElementById("starterDish").innerHTML ="";
		document.getElementById("main dishDish").innerHTML ="";
		document.getElementById("dessertDish").innerHTML ="";
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
		this.menuPrice.html(model.getTotalMenuPrice());
		//this.dishPrice.html(dishPrice);
		//this.menuPrice.html(model.getTotalMenuPrice);
		//this.dishName.html(model.menu)
	}
	
	this.update = function(){
		this.doView();
	}

	this.doView(); //runs in inatilatzion phase


	model.addObserver(this);



}
 
