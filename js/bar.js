$(document).ready(function () {

	var ctx = $("#bar-chartcanvas");

	var data = {
		labels : ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep" , "Oct", "Nov", "Dec"],
		datasets : [
			{
				label : "Registered user in a Month",
				data : [5, 10, 15, 6, 4, 5, 10, 3, 7, 10, 15, 5],
				backgroundColor : [
					"#965296",
					"#965296",
					"#965296",
					"#965296",
					"#965296",
					"#965296",
					"#965296",
					"#965296",
					"#965296",
					"#965296",
					"#965296",
					"#965296"
				],
				borderWidth : 1
			},
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Monthly User Bar Graph",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : true,
			position : "bottom"
		},
		scales : {
			yAxes : [{
				ticks : {
					min : 0
				}
			}]
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

});