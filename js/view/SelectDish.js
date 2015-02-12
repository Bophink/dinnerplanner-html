//ExampleView Object constructor
var SelectDish = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	this.row = container.find("#row");
	

	var dishList = model.getAllDishes("starter","");

	var courses = document.createElement('div');
		courses.className = "row";
		courses.id = "courses";
		courses.style = "padding: 20px 20px;"


	for(var i = 0; i<3; i++){
		//console.log("for: "+i);


		var newDiv = document.createElement('div');
		newDiv.className = "col-md-2";
		newDiv.id = dishList[i].name
		newDiv.style = "padding: 0px 0px; margin: 20px 20px;"

		var newInnerDiv = document.createElement('div');
		newInnerDiv.className = "courseThumb";
		newInnerDiv.style = "background-image: url(images/"+dishList[i].image+");";

		var button = document.createElement('button');
		button.id = "courseId"+i;
		button.className = "btn";
		button.style = "heigth: 5%; width: 100%; background-color: rgba(255,255,255,0.7);"
		button.onclick ="";

		var buttonText = document.createTextNode(dishList[i].name);

		button.appendChild(buttonText);
		newInnerDiv.appendChild(button);

		newDiv.appendChild(newInnerDiv);

		var text = document.createElement('p');

		var textText = document.createTextNode(dishList[i].description);

		text.appendChild(textText);
		newDiv.appendChild(text);

		courses.appendChild(newDiv);

		

	}

	this.row.html(courses);

	//document.getElementById('allCourses'.appendChild(course));

}

	