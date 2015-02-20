var DSView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.confButton = container.find(".btn");

	this.update = function(){
		this.numberOfGuests.html(model.getNumberOfGuests());
	}

	this.update();
	model.addObserver(this);
}