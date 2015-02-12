//ExampleView Object constructor
var IngredView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.dishIngredients = container.find("#dishIngredients");
	this.ingredTotPrice = container.find("#ingredTotPrice");
	this.nrOfGuests = container.find("#nrOfGuests");

	var dishID = 1;
	var strOfIngredients = '<table class="table"><tbody>';
	var totPrice = 0;
	var nrOfGuests = model.getNumberOfGuests();


	//creates table-elements and adds the data into them with quantities and prices adjusted to specified nr of guests
	for (i in model.getDish(dishID).ingredients) {
		totPrice = totPrice + model.getDish(dishID).ingredients[i].price*nrOfGuests;
		strOfIngredients = strOfIngredients + "<tr>";
		strOfIngredients = strOfIngredients + "<td>";
		strOfIngredients = strOfIngredients + String(model.getDish(dishID).ingredients[i].quantity*nrOfGuests);
		strOfIngredients = strOfIngredients + " " + String(model.getDish(dishID).ingredients[i].unit);
		strOfIngredients = strOfIngredients + "</td>";
		strOfIngredients = strOfIngredients + "<td>";
		strOfIngredients = strOfIngredients + String(model.getDish(dishID).ingredients[i].name);
		strOfIngredients = strOfIngredients + "</td>";
		strOfIngredients = strOfIngredients + "<td>";
		strOfIngredients = strOfIngredients + "SEK";
		strOfIngredients = strOfIngredients + "</td>";
		strOfIngredients = strOfIngredients + "<td>";
		strOfIngredients = strOfIngredients + String(model.getDish(dishID).ingredients[i].price*nrOfGuests);
		strOfIngredients = strOfIngredients + "</td>";
		strOfIngredients = strOfIngredients + "</tr>";
	}
		strOfIngredients = strOfIngredients + "</tbody></table>"

	this.dishIngredients.html(strOfIngredients);
	this.ingredTotPrice.html(totPrice);
	this.nrOfGuests.html(nrOfGuests);
	
}
 
