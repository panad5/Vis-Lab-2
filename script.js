// TODO: load the dataset 
let attractions; //global variable attractions

fetch('attractions.json')
  .then(response => response.json()) //converts returned response object to json format
  .then(data => { 
		attractions = data; //stores converted data into attractions
		console.log('attractions', attractions);
		filterData('all'); //displays all attractions initially
		  });

	/* **************************************************
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions*/

function filterData(category) {
chartCategory = attractions;
chartCategory.sort( function (a, b) { return b.visitors - a.visitors; } ); //sorts all data

//display chart based on category selected
if (category == "all"){
	chartCategory = attractions;
}

if (category == "Water Park"){
	chartCategory = attractions.filter(function(obj){ //filter function returns objects matching the category
		return obj.Category === "Water Park";  //only returns if the object category strictly matches selection
})
}

if (category == "Theme Park"){
	chartCategory = attractions.filter(function(obj){
		return obj.Category === "Theme Park";
})
}

if (category == "Museum"){
	chartCategory = attractions.filter(function(obj){
		return obj.Category === "Museum";
})
}
	/* CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:*/
	 /* - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 * **************************************************/
renderBarChart(chartCategory.slice(0, 5));
};

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
let element = document.querySelector('#attraction-category'); //stores attraction categories in element
element.addEventListener("change", function(e){ //adds event listener to event categories, when change happens function e runs
filterData(e.target.value); //calls filterData on selected category which equals e.target.value
})


