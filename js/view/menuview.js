//ExampleView Object constructor
var MenuView = function (container, model) {
	this.menu = container.find("#menu");

	var fullMenu = model.getFullMenu();

	var courses = document.createElement('div');
		courses.className = "row row-centered";
		courses.id = "courses";
		courses.style = "padding: 20px 20px;"
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	for(var i = 0; i<3; i++){
		try{
		
			var left = document.createElement('div');
			left.setAttribute("class",  "col-md-3");
			left.setAttribute("id", fullMenu[i].name+"image");
			left.setAttribute("style" , "display:table-cell; vertical-align:middle; text-align:center;");


			var image = document.createElement('img');
			image.setAttribute("src", "images/"+String(fullMenu[i].image))

			left.appendChild(image);

			var center = document.createElement('div');
			center.setAttribute("class",  "col-md-4");
			center.setAttribute("id", fullMenu[i].name+"rubrik");

			var rubrik = document.createElement('h1');

			var rubrikText = document.createTextNode(fullMenu[i].name);

			rubrik.appendChild(rubrikText);

			var shortT = document.createElement('p');

			var shortText = document.createTextNode(fullMenu[i].description);

			shortT.appendChild(shortText);

			center.appendChild(rubrik);
			center.appendChild(shortT);

			var rigth = document.createElement('div');
			rigth.setAttribute("class",  "col-md-4");
			rigth.setAttribute("id", fullMenu[i].name+"prep");

			var rubrikprep = document.createElement('h1');

			var rubrikprepText = document.createTextNode("Preparation");

			rubrikprep.appendChild(rubrikprepText);

			rigth.appendChild(rubrikprep);

			var shortP = document.createElement('p');

			var shortPText = document.createTextNode(fullMenu[i].description);

			shortP.appendChild(shortPText);

			rigth.appendChild(shortP);




			courses.appendChild(left);
			courses.appendChild(center);
			courses.appendChild(rigth);
	
		}catch(e){
			//console.log("fullMenu["+i+"] är undefined");

		}
	}



	this.menu.html(courses);

}


 
