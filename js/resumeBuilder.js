var bio = {
	"name" : "William Liu",
	"role": "Electrical Engineering-in-Training",
	"contacts" : {
		"mobile" : "905-923-5538",
		"email" : "liuwill14@gmail.com",
		"github": "wk14",
		"location" : "Toronto"
	},
	"welcomeMessage" : "Welcome to my resume page!",
	"bio_pic":"https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg",
	"skills" : [
	"Java", "C/C++", "Python", "JS", "MATLAB", "Circuit Analysis", "Filters", "Semiconductors", "Troubleshooting", "MS Word", "MS Excel", "MS PowerPoint"]
};

var work = {
	"jobs":[
	{
		"title" : "Research Assistant",
		"employer" : "Cognitive and Aging Center, Kaohsiung Chang Gung Memorial Hospital",
		"dates" : "July - August. 2015",
		"location" : "Kaohsiung, Taiwan",
		"description": "Performed analysis on structural covariance using PET and MR imaging data in normal and patient populations with Alzheimer’s disease"	
	},
	{
		"title":"Server",
		"employer": "Nation's Fresh Food",
		"dates": "Jun. - Sep. 2013",
		"location": "Hamilton",
		"description": "Serving Food"
	}
	]
}

var education = {
	"schools": [
	{
		"name" : "McMaster University",
		"years" : "2012 - 2016",
		"city" : "Hamilton",
		"major" : "Electrical and Biomedical Engineering",
		"degree" : "B.Eng.",
		"url": "http://www.mcmaster.ca/"
	}
	],
	"OnlineCourses": [
	{
		"title" : "JavaScript Syntax",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
	}
	]
}

var projects = {
	"projects":[
	{
		"title": "Biomusic, Emotional Expression Device for Individuals with PMLD",
		"dates": 2016,
		"description":"Developed hardware and software system to collect physiological data to create music for translating the emotions of individuals with profound multiple disabilities" 
	}
	]
}


if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(var skill=0; skill<bio.skills.length;skill++){
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#header").append(formattedSkill);
	}
}

function displayWork(){
	for(var job=0;job<work.jobs.length;job++){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
}

$(document).click(function(loc){
	logClicks(loc.pageX,loc.pageY);
});


function inName(name){
	name = name.trim().split(" ");
	name[1]=name[1].toUpperCase();
	name[0] = name[0].charAt(0).toUpperCase()+name[0].slice(1,name[0].length).toLowerCase();
	return name[0]+" "+name[1];
}



var formattedHeaderName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedHeaderName);


