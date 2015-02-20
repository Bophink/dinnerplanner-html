//ExampleView Object constructor
var SelectDish = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	this.row = container.find("#row");
	this.searchField = container.find("#searchField");
	this.search = container.find("#search");
	this.selectDishType = container.find("#selectDishType");



	this.update = function(){

		this.buttonIDs = [];
		this.buttons = [];
		
		console.log(model.getFilter());
		console.log(model.getSearch());

		var dishList = model.getAllDishes(model.getFilter(),model.getSearch());

		var courses = document.createElement('div');
			courses.setAttribute("class", "row");
			courses.setAttribute("tid", "courses");
			courses.setAttribute("style", "padding: 20px 20px;");


		for(var i = 0; i<dishList.length; i++){
			//console.log("for: "+i);


			var newDiv = document.createElement('div');
			newDiv.setAttribute("class", "col-md-2");
			newDiv.setAttribute("id", dishList[i].name);
			newDiv.setAttribute("style", "padding: 0px 0px; margin: 20px 20px;");

			var newInnerDiv = document.createElement('div');
			newInnerDiv.setAttribute("class", "courseThumb");
			newInnerDiv.setAttribute("style", "background-image: url(images/"+dishList[i].image+");");

			var button = document.createElement('button');
			button.setAttribute("id", dishList[i].id);
			this.buttonIDs.push(dishList[i].id);
			button.setAttribute("class", "btn courseButton");
			button.setAttribute("style", "heigth: 5%; width: 100%; background-color: rgba(255,255,255,0.7);");
			//button.setAttribute("onclick", "");

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

		
		this.buttons= container.find(".courseButton");

		selectDishCtrl.update();


		
	}

	var selectDishCtrl = new SelectDishCtrl(this, model);

	this.update();



	model.addObserver(this);
	
	
	

	

	//document.getElementById('allCourses'.appendChild(course));

}

	