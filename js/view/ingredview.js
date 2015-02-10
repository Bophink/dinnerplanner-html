//ExampleView Object constructor
var IngredView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.dishIngredients = container.find("#dishIngredients");
	this.ingredTotPrice = container.find("#ingredTotPrice");


	var strOfIngredients = '<table class="table"><tbody>';
	var totPrice = 0;

	for (i in model.getDish(1).ingredients) {
		totPrice = totPrice + model.getDish(1).ingredients[i].price;
		strOfIngredients = strOfIngredients + "<tr>";
		strOfIngredients = strOfIngredients + "<td>";
		strOfIngredients = strOfIngredients + String(model.getDish(1).ingredients[i].quantity);
		strOfIngredients = strOfIngredients + " " + String(model.getDish(1).ingredients[i].unit);
		strOfIngredients = strOfIngredients + "</td>";
		strOfIngredients = strOfIngredients + "<td>";
		strOfIngredients = strOfIngredients + String(model.getDish(1).ingredients[i].name);
		strOfIngredients = strOfIngredients + "</td>";
		strOfIngredients = strOfIngredients + "<td>";
		strOfIngredients = strOfIngredients + "SEK";
		strOfIngredients = strOfIngredients + "</td>";
		strOfIngredients = strOfIngredients + "<td>";
		strOfIngredients = strOfIngredients + String(model.getDish(1).ingredients[i].price);
		strOfIngredients = strOfIngredients + "</td>";
		strOfIngredients = strOfIngredients + "</tr>";
	}
		strOfIngredients = strOfIngredients + "</tbody></table>"

	this.dishIngredients.html(strOfIngredients);
	this.ingredTotPrice.html(totPrice);
	
}
 
