//ExampleView Object constructor
var OverView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.menu = container.find("#menu");
	this.menumenu = container.find("#menumenu");


	var fullMenu = model.getFullMenu();
	

	this.menumenu.html(fullMenu.length);
	

}
 
