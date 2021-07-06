if (screen.width <= 670) {
    location.replace = "./mobile.html";
  }	
var apidata
	fetch(

			'https://techapi.me/schedule/api.php'

			)
		.then((sch) => sch.json())
		.then((sch) => {
			
			apidata = sch
			
			
		});

var input = document.getElementById("group")
input.addEventListener("keyup",function(e){

	if(e.keyCode === 13)
	{
		event.preventDefault();
  		document.getElementById("press").click();
	}

});		
		
function f1(){
			
	var outcome = [];
	var group =[];
	var sec_input = document.getElementById("group").value.toUpperCase();
	var week = document.getElementById("opt").value;
	var sec = 'L4C' + sec_input;

	for(var m = 1; m < apidata.length; m ++)
	{

		if (group.includes(apidata[m]["section"]))
		{
			continue;
		}

		else{

			if (apidata[m]["section"].length <= 6){
				group.push(apidata[m]["section"])
			}
			
		}
	}



	if(group.includes(sec))
	{
			for(var i=1; i < apidata.length; i++)
			{
				/* if more than 2 sections*/
				if(apidata[i]["section"].length > 6)
				{
					if(apidata[i]["day"] == week)		
					{	
						var spil = apidata[i]["section"].split("+")
						for( var z = 0 ; z < spil.length; z ++)
						{
							if (spil[z] == sec)
							{
								outcome.push("<td>" + apidata[i]["moduletitle"] + "</td><td>"+ apidata[i]["classtime"] + "</td><td>" +   apidata[i]["platform"] + "</td><td>" + apidata[i]["classtype"] +  "</td><td>" + apidata[i]["lecturer"] + "</td><td>" + apidata[i]["modulecode"] + "</td>")
							
							}
						}
					}
				}
				/* if more than 2 sections*/
				else 
				{
					if(apidata[i]["section"] == sec && apidata[i]["day"] == week)
					{
			
						outcome.push("<td>" + apidata[i]["moduletitle"] + "</td><td>"+ apidata[i]["classtime"] + "</td><td>" +   apidata[i]["platform"] + "</td><td>" + apidata[i]["classtype"] +  "</td><td>" + apidata[i]["lecturer"] + "</td><td>" + apidata[i]["modulecode"] + "</td>")
					}
					
				}

			}

			if (outcome.length == 0)
			{
				outcome.push("No classes Today!");
			}

			document.getElementById("display").innerHTML = "";
			for (var l=0 ;l < outcome.length; l++)
			{
				var line = document.createElement("tr");
				line.className = "result";
				line.innerHTML = outcome[l];
				document.getElementById("display").appendChild(line);
			}	
	}
	else
	{
		document.getElementById("display").innerHTML = "";
		document.getElementById("display").innerHTML = "No such group";
	}

}
  var d = new Date();
  var n = d.getDay()
  if(n == 0){
  var today = "Sunday";
    document.getElementById("day_0").selected = "selected";
    document.getElementById("today_data").innerHTML = today;
  }
  if(n == 1){
  var today = "Monday";
 	document.getElementById("day_1").selected = "selected";
 	document.getElementById("today_data").innerHTML = today;
  }
  if(n == 2){
  var today = "Tuesday";
    document.getElementById("day_2").selected = "selected";
    document.getElementById("today_data").innerHTML = today;
  }
  if(n == 3){
  var today = "Wednesday";
    document.getElementById("day_3").selected = "selected";
    document.getElementById("today_data").innerHTML = today;
  }
  if(n == 4){
  var today = "Thursday";
    document.getElementById("day_4").selected = "selected";
    document.getElementById("today_data").innerHTML = today;
  }
  if(n == 5){
  var today = "Friday";
    document.getElementById("day_5").selected = "selected";
    document.getElementById("today_data").innerHTML = today;
  }
  if(n == 6){
  var today = "Saturday";
    document.getElementById("day_6").selected = "selected";
    document.getElementById("today_data").innerHTML = today;
  }
