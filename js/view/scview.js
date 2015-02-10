//ExampleView Object constructor
var ScView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.dishName = container.find("#dishName");
	this.dishImg = container.find("#dishImg");
	this.dishDescription = container.find("#dishDescription");
	
	var dImg = document.createElement('img');
	dImg.src="images/" + String (model.getDish(1).image);


	this.dishName.html(model.getDish(1).name);
	this.dishImg.html(dImg);
	this.dishDescription.html(model.getDish(1).description);
	
}
 
