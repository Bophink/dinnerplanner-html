//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.menuPrice = container.find("#menuPrice");
	this.confButton = container.find("#confDinButt");
	//this.dishPrice = container.find("#dishPrice");
	//this.menuPrice = container.find("#menuPrice");
	//this.dishName = container.find("#dishName");
	//model.addDishToMenu(1);
	//model.addDishToMenu(200);
	
	this.doView = function(){
		/*var dishPrice = 0;
		for (i in model.getDish(1).ingredients) {
			dishPrice = dishPrice + model.getDish(1).ingredients[i].price;
		}*/



		
		
		//console.log("model.getFullMenu()");
		var fullMenu = model.getFullMenu();
		//console.log(fullMenu);


		var fullMenu = model.getFullMenu();

		document.getElementById("AppetizersDish").innerHTML = "";
		document.getElementById("Main DishDish").innerHTML = "";
		document.getElementById("DessertsDish").innerHTML = "";

		for (dish in fullMenu) {
			try {	//kan bytas till if
				if (fullMenu[dish] != "") {
					
					var dishName = document.createTextNode(fullMenu[dish].Title);
					var dishPrice = document.createTextNode(model.getDishPrice(fullMenu[dish]));
					var td1 = document.createElement("td");
					td1.style.overflow = "hidden";
					td1.width = "105%";
					var td2 = document.createElement("td");
					td2.style.overflow = "hidden";
					td2.style.width = "40%";
					var td3 = document.createElement("td");
					td3.style.overflow = "hidden";
					td3.style.width = "5%";

					var img = document.createElement('img');
					img.setAttribute("type", fullMenu[dish].Category);
					img.setAttribute("class", "removeButtons");
					img.setAttribute("src", "http://upload.wikimedia.org/wikipedia/en/2/28/Speedy_Delete_Cross.png");
					img.setAttribute("style", "width: 25px; ");

					td1.appendChild(dishName);
					td2.appendChild(dishPrice);
					td3.appendChild(img);

					document.getElementById(String (fullMenu[dish].Category) + "Dish").appendChild(td1);
					document.getElementById(String (fullMenu[dish].Category) + "Dish").appendChild(td2);
					document.getElementById(String (fullMenu[dish].Category) + "Dish").appendChild(td3);
					

				}
				else {
					document.getElementById(String (fullMenu[dish].Category) + "Dish").appendChild("td1");
					document.getElementById(String (fullMenu[dish].Category) + "Dish").appendChild("td2");	
					//console.log("hej2");
				}			
			}
			catch(e) {
				//console.log("Det gick åt helvete");
			}
		}
		var currDish = model.getCurrentDish();
		console.log("leftmenu dishID: "+currDish);
		document.getElementById("pendingDish").innerHTML = "";

		if(currDish!=""){
			console.log(currDish);
			var dishName = document.createTextNode("Pending");
			var dishPrice = document.createTextNode(model.getDishPrice(currDish));
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");
			td1.appendChild(dishName);
			td2.appendChild(dishPrice);
			document.getElementById("pendingDish").setAttribute("style", "background-color: rgb(242, 171, 71);");
			document.getElementById("pendingDish").appendChild(td1);
			document.getElementById("pendingDish").appendChild(td2);
		}





		//console.log(model.menu["starter"]);


		this.numberOfGuests.html(model.getNumberOfGuests());
		this.menuPrice.html(model.getTotalMenuPrice());
		
		this.removeButtons = container.find(".removeButtons");
		//this.dishPrice.html(dishPrice);
		//this.menuPrice.html(model.getTotalMenuPrice);
		//this.dishName.html(model.menu)
	}
	
	this.update = function(){
		this.doView();
		exampleViewCtrl.update();
	}

	this.doView(); //runs in inatilatzion phase


	model.addObserver(this);
	var exampleViewCtrl = new ExampleViewCtrl(this, model);
	




}
 
