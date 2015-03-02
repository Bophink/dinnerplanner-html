//ExampleView Object constructor
var IngredView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.dishIngredients = container.find("#dishIngredients");
	this.ingredTotPrice = container.find("#ingredTotPrice");
	this.nrOfGuests = container.find("#nrOfGuests");
	this.confBut = container.find("#confBut");

	

	this.update = function(){

		var dish = model.getDish();
		var strOfIngredients = '<table class="table"><tbody>';
		var totPrice = 0;
		var nrOfGuests = model.getNumberOfGuests();


		//creates table-elements and adds the data into them with quantities and prices adjusted to specified nr of guests
		try{
			for (i in model.getDish().Ingredients) {
				totPrice = totPrice + model.getDish().Ingredients[i].MetricQuantity*nrOfGuests;
				strOfIngredients = strOfIngredients + "<tr>";
				strOfIngredients = strOfIngredients + "<td>";
				strOfIngredients = strOfIngredients + (+(model.getDish().Ingredients[i].MetricQuantity*nrOfGuests).toFixed(2));
				strOfIngredients = strOfIngredients + " " + String(model.getDish().Ingredients[i].MetricUnit);
				strOfIngredients = strOfIngredients + "</td>";
				strOfIngredients = strOfIngredients + "<td>";
				strOfIngredients = strOfIngredients + String(model.getDish().Ingredients[i].Name);
				strOfIngredients = strOfIngredients + "</td>";
				strOfIngredients = strOfIngredients + "<td>";
				strOfIngredients = strOfIngredients + "SEK";
				strOfIngredients = strOfIngredients + "</td>";
				strOfIngredients = strOfIngredients + "<td>";
				strOfIngredients = strOfIngredients + (+(model.getDish().Ingredients[i].MetricQuantity*nrOfGuests).toFixed(2));
				strOfIngredients = strOfIngredients + "</td>";
				strOfIngredients = strOfIngredients + "</tr>";
			}
		}catch(e){
			//console.log("skit");
		}
		strOfIngredients = strOfIngredients + "</tbody></table>"

		this.dishIngredients.html(strOfIngredients);
		this.ingredTotPrice.html(totPrice);
		this.nrOfGuests.html(nrOfGuests);
	}


	this.update();

	model.addObserver(this);
	
}
 
