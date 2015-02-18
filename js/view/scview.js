//ExampleView Object constructor
var ScView = function (container, model) {

	this.update = function(){

		var dishID = model.getCurrentDishId();
		console.log("Trying to get the dish with id:"+dishID);
		//var dish = model.getDish(dishID);
		
		// Get all the relevant elements of the view (ones that show data
	  	// and/or ones that responed to interaction)
		this.dishName = container.find("#dishName");
		this.dishImg = container.find("#dishImg");
		this.dishDescription = container.find("#dishDescription");
		
		var dImg = document.createElement('img');
		dImg.src="images/" + String (model.getDish(dishID).image);


		this.dishName.html(model.getDish(dishID).name);
		this.dishImg.html(dImg);
		this.dishDescription.html(model.getDish(dishID).description);

	}

	this.update();
	model.addObserver(this);

	
	
	
}
 
