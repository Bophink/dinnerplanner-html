//ExampleView Object constructor
var ScView = function (container, model) {

	this.button = container.find(".btn");

	this.update = function(){

		var dish = model.getDish();
		//console.log(dish);
		if(dish != ""){
			//console.log("Trying to get the dish with id:"+dishID);
			//var dish = model.getDish(dishID);
			
			// Get all the relevant elements of the view (ones that show data
		  	// and/or ones that responed to interaction)
			this.dishName = container.find("#dishName");
			this.dishImg = container.find("#dishImg");
			this.dishDescription = container.find("#dishDescription");
			this.dishInstructions = container.find("#dishInstructions")
			
			var dImg = document.createElement('img');
			dImg.src="http://marknadskompetens.se/projekt/imageresize.php?link="+dish.ImageURL+"&newWidth=350";
			dish.ImageURL;


			this.dishName.html(dish.Title);
			this.dishImg.html(dImg);
			this.dishDescription.html(dish.Description);
			this.dishInstructions.html("<h4>Preparations </h4><p>" + dish.Instructions+"</p>");
		}

	}

	this.update();
	model.addObserver(this);

	
	
	
}
 
