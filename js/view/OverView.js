//ExampleView Object constructor
var OverView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.menu = container.find("#menu");
	this.menumenu = container.find("#menumenu");


	var fullMenu = model.getFullMenu();
	

	

	this.menumenu.html(fullMenu.length);
	//console.log(fullMenu[0].name);

	var courses = document.createElement('div');
		courses.className = "row";
		courses.id = "courses";
		courses.style = "padding: 20px 20px;"

	for(var i = 0; i<3; i++){
		try{
			var newDiv = document.createElement('div');
			newDiv.setAttribute("class",  "col-md-2");
			newDiv.setAttribute("id", fullMenu[i].name);
			newDiv.setAttribute("style" , "padding: 0px 0px; margin: 20px 20px;");

			var newInnerDiv = document.createElement('div');
			newInnerDiv.setAttribute("class", "courseThumb");
			newInnerDiv.setAttribute("style" , "background-image: url(images/"+fullMenu[i].image+");");

			var button = document.createElement('button');
			button.setAttribute("id", "courseId"+i);
			button.setAttribute("class", "btn");
			button.setAttribute("style", "heigth: 5%; width: 100%; background-color: rgba(255,255,255,0.7);");
			button.setAttribute("onclick", "");

			var buttonText = document.createTextNode(fullMenu[i].name);

			button.appendChild(buttonText);
			newInnerDiv.appendChild(button);

			newDiv.appendChild(newInnerDiv);

			var text = document.createElement('p');

			var textText = document.createTextNode("Price from JS-object? needs to be calculated");

			text.appendChild(textText);
			newDiv.appendChild(text);

			courses.appendChild(newDiv);
		}catch(e){
			console.log("fullMenu["+i+"] är undefined");

		}
	}
	var verticalLine = document.createElement('div');
			verticalLine.setAttribute("class",  "col-md-2");
			verticalLine.setAttribute("id", "verticalLine");
			verticalLine.setAttribute("style" , "border-left: 3px solid #000000; height: 200px; padding-top: 100px");
	
	var text = document.createElement('h3');
	var textText = document.createTextNode("Total:");
	
	var text2 = document.createElement('h3');
	text2.setAttribute("style", "color: red")
	var textText2 = document.createTextNode("ex 34567890 sek");

	text.appendChild(textText);
	verticalLine.appendChild(text);

	text2.appendChild(textText2);
	verticalLine.appendChild(text2);

	courses.appendChild(verticalLine);


	

	this.menu.html(courses);
	

}
 
