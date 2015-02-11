//ExampleView Object constructor
var AllCourses = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.test = container.find("#test");
	//this.courses = container.find("#courses");

	var dishList = model.getAllDishes("dessert","");


	this.test.html(dishList.length);

	var course = document.createElement('div');
		course.className = "courses";
		course.style = "padding: 0px 0px;"

	/*for(var i = 0; i<3; i++){


		var newDiv = document.createElement('div');
		newDiv.className = "col-md-2";
		newDiv.id = dishList[i].name
		newDiv.style = "padding: 0px 0px;"

		var newInnerDiv = document.createElement('div');
		newInnerDiv.className = "courseThumb";
		newInnerDiv.style = "background-image: url(images/"+dishList[i].image+");";

		var button = document.createElement('button');
		button.id = "search";
		button.class = "btn";
		button.onclick ="";

		var buttonText = document.createTextNode(dishList[i].name);

		button.appendChild(buttonText);
		newInnerDiv.appendChild(button);

		newDiv.appendChild(newInnerDiv);

		var text = document.createElement('p');

		var textText = document.createTextNode(dishList[i].description);

		text.appendChild(textText);
		newDiv.appendChild(text);

		course.appendChild(newDiv);

	}*/

	this.allCourses.html(course);

	document.getElementById(''.appendChild(course));

/*
	var newDiv = document.createElement('div');
	newDiv.className = "col-md-2";
	newDiv.style = "padding: 0px 0px;"

	var newInnerDiv = document.createElement('div');
	newInnerDiv.className = "courseThumb";
	newInnerDiv.style = "background-image: url(images/toast.jpg);";

	var button = document.createElement('button');
	button.id = "search";
	button.class = "btn";
	button.onclick ="";

	var buttonText = document.createTextNode("buttonText");

	button.appendChild(buttonText);
	newInnerDiv.appendChild(button);

	newDiv.appendChild(newInnerDiv);

	var text = document.createElement('p');

	var textText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore");

	text.appendChild(textText);
	newDiv.appendChild(text);



	this.courses.html(newDiv);

	
*/

	
	


	
}
 
