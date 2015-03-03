//DinnerModel Object constructor
var DinnerModel = function() {
 	var nrGuests = 3;
 	var menu = {"Appetizers":"", "Main Dish":"", "Dessert":""}; 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu

	var observers = [];
	var currentDishId = "";
	var currentDish = {};

	var filter = "Appetizer";
	var searchText = "";
	
	var dishList = [];

	var apiKey = "dvx6xnM6eJJ7D6eU5toZ9RnMtHN74Gye";
	var apiKey2 = "dvxF0CCPfnBJczzM0l3mACa6iROX43Py";

	this.getDishList = function(){
		//console.log(dishList);
		return dishList;
	}


	this.addObserver = function(observer) {
		observers.push(observer);
		//console.log("pushat: ");
		//console.log(observer);

	}

	this.notifyObservers = function(){
		
		for(var i = 0; i<observers.length; i++){
			observers[i].update();
			//console.log("notified");
		}
	}

	this.setFilterSearch = function(newFilter, newSearchText){
		filter = newFilter;
		searchText = newSearchText;
		this.getAllDishes();
		

	}
	this.getFilter = function(){
		return filter;
	}
	this.getSearch = function(){
		return searchText;
	}
	this.getDish = function(){
		return currentDish;
	}

	



	this.setNumberOfGuests = function(num) {
		if (num>0) {
			nrGuests = num;	
			this.notifyObservers();	
			//console.log("changed nrG");	
		}

	}



	// should return 
	this.getNumberOfGuests = function() {
		return nrGuests;
	}

	this.getCurrentDishId = function() {
		if(currentDishId!=""){
			return currentDishId;
		}
		
	}
	this.setCurrentDishId = function(id) {
		//console.log("currentdishID ändras till: "+id);
		currentDishId = id;
		this.getDishAPI();
		this.notifyObservers();

	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		return menu[type];
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		var array = [menu.Appetizers,menu["Main Dish"], menu.Dessert];

		return array;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var menuDishes = this.getFullMenu();
		var ingredients = [];
		/*for (dish in menuDishes) {
			for(ing in dish.ingredients){
				ingredients.push(ing);
			}
		}*/
		return ingredients;
	}

	this.getDishPrice = function(id) {
		var dish = currentDish;
		var dishPrice = 0;
		for (i in dish.Ingredients) {
			dishPrice += dish.Ingredients[i].MetricQuantity*nrGuests;
		}
		dishPrice = +(dishPrice.toFixed(2));
		return dishPrice;
	}


	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var totalPrice = 0;
		var fullMenu = this.getFullMenu();
		
		
		for(dish in fullMenu){
			//console.log(dish);
			if(fullMenu[dish]!=""){
				for (i in fullMenu[dish].Ingredients) {
					
					totalPrice += fullMenu[dish].Ingredients[i].MetricQuantity*nrGuests;
				}
				
				
			}
		} 
		console.log(fullMenu + "cost: "+totalPrice);
		return +(totalPrice.toFixed(2));
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(obj) {
		var type = obj.Category;
		if (menu[type] != null) {
			//this.removeDishFromMenu(menu[type]);
			menu[type] = obj;
		}
		else {
			menu[type] = obj;
		}
		this.notifyObservers();
	}
		

	//Removes dish from menu
	this.removeDishFromMenu = function(type) {
		menu[type].splice(currDish,1);
		/*
		for (dish in fullMenu) {
			if (dish.id === id) {
				menu[dish.type].splice(dish,1);
			}
		}*/
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function () {

		
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=8&any_kw="
                  + searchText +" "+ filter  
                  + "&api_key="+apiKey;
                  var model = this;

        console.log("API anrop ALL");

        
        
        //console.log(url);
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,

            url: url,
            beforeSend: function(){
       
            	$("#rowID").html("<img id='loading' src='https://mydreamstore.in/static/images/im-loader-gif.gif' />");
            },
            success: function (data) {
            	$("#rowID").html("");
            	$("#errorMSG").html("");
            	dishList.length=0;
                //alert('success');
                //console.log(data.Results[1]);
                //console.log(dishList);
                dishList = data.Results;
                


                model.notifyObservers();
            },
            error: function(xhr,err){
            	$("#errorMSG").html("<h1>There was an error, please check your connnection </h1>");
            	console.log(xhr);

	        }
            

        })
        
        

    }

    


	 

	//function that returns a dish of specific ID
	this.getDishAPI = function () {
		//console.log(id);
		

		if (currentDishId) {
			console.log("API anrop SINGLE");
			var model = this;
	        var url = "http://api.bigoven.com/recipe/"
	                  + currentDishId + "?api_key="+apiKey;
			$.ajax({
	            type: "GET",
	            dataType: 'json',
	            cache: false,

	            url: url,
	            beforeSend: function(){
	            	$("#loadingOverlay").html("<img src='https://mydreamstore.in/static/images/im-loader-gif.gif' />");
	            	$("#NameImg").hide();
	            	$("#dishInstructions").hide();
	            	$("#BackSD").hide();
	            	$("#ingredview").hide();

            	},
	            success: function (data) {
	                //alert('success');
	                //console.log(data.Results[1]);
	                //console.log(dishList);
	                
	                //console.log(data);
	                $("#loadingOverlay").html("");
	                $("#NameImg").show();
	            	$("#dishInstructions").show();
	            	$("#ingredview").show();
	                currentDish = data;
	                model.notifyObservers();
	            },
	            error: function(xhr,err){
	            	$("#loadingOverlay").html("<h1 style='margin-left:200px;'>There was an error, please check your connnection </h1>");
	            	$("#BackSD").show();
	            	
	            	//console.log(xhr);

	            }

	        })
		}
/*	  	for(var key = 0; key< dishes.length; key++){
			if(dishes[key].id === id) {
				return dishes[key];
			}
		}*/
	}


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}

