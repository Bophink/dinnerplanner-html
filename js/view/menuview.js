//ExampleView Object constructor
var MenuView = function (container, model) {
	this.menu = container.find("#menu");

	this.update = function(){

		var fullMenu = model.getFullMenu();
		//console.log("Menyn är: ");
		//console.log(fullMenu);

		var courses = document.createElement('div');
			courses.id = "courses";
			courses.style = "padding: 20px 20px;"
		
		// Get all the relevant elements of the view (ones that show data
	  	// and/or ones that responed to interaction)

		for(var i = 0; i<fullMenu.length; i++){
			if(fullMenu[i]){

				var course = document.createElement('div');
				course.className = "row row-centered";
				course.style = "margin-bottom:20px;"
			
				var left = document.createElement('div');
				left.setAttribute("class",  "col-md-3");
				left.setAttribute("id", fullMenu[i].Title+"image");
				left.setAttribute("style" , "display:table-cell; vertical-align:middle; text-align:center;");

				var imageURL="";
				if(!fullMenu[i].ImageURL || fullMenu[i].ImageURL === "http://redirect.bigoven.com/pics/recipe-no-image.jpg"){
					imageURL = "http://i580.photobucket.com/albums/ss248/stupid77_album/lonelyDog.jpg";
				}else{
					imageURL = fullMenu[i].ImageURL;
				}

				var image = document.createElement('img');
				image.setAttribute("src", "http://marknadskompetens.se/projekt/imageresize.php?link="+imageURL+"&newWidth=200");

				left.appendChild(image);

				var center = document.createElement('div');
				center.setAttribute("class",  "col-md-4");
				center.setAttribute("id", fullMenu[i].Title+"rubrik");

				var rubrik = document.createElement('h1');

				var rubrikText = document.createTextNode(fullMenu[i].Title);

				rubrik.appendChild(rubrikText);

				var shortT = document.createElement('p');

				var shortText = document.createTextNode(fullMenu[i].Description);

				shortT.appendChild(shortText);

				center.appendChild(rubrik);
				center.appendChild(shortT);

				var rigth = document.createElement('div');
				rigth.setAttribute("class",  "col-md-4");
				rigth.setAttribute("id", fullMenu[i].Title+"prep");

				var rubrikprep = document.createElement('h1');

				var rubrikprepText = document.createTextNode("Preparation");

				rubrikprep.appendChild(rubrikprepText);

				rigth.appendChild(rubrikprep);

				var shortP = document.createElement('p');

				var shortPText = document.createTextNode(fullMenu[i].Instructions);

				shortP.appendChild(shortPText);

				rigth.appendChild(shortP);




				course.appendChild(left);
				course.appendChild(center);
				course.appendChild(rigth);
				courses.appendChild(course);
		
			}
		}

		if(fullMenu[0] ==="" && fullMenu[1] ==="" && fullMenu[2] ==="" ){
			var noCourse = document.createElement('h1');

			var noCourseText = document.createTextNode("Add courses to your menu, to show them here.");
			noCourse.appendChild(noCourseText);

			courses.appendChild(noCourse);

		}



		this.menu.html(courses);
	}

	this.update();
	model.addObserver(this);

}


 
