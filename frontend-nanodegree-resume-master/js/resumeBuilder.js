/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
var yourname = "Emily";
var awesomeThoughts = "I am "+yourname+" and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
$(main).append(funThoughts);

*/

var bio ={
    name: "Emily Chang",
    role:"Developer",
    contacts: {
        mobile: "412.608.2527",
        email: "emilyailichang@gmail.com",
        github:"ailichang",
        twitter:"",
        location:"San Mateo, CA"
    },
    welcomeMessage :"Welcome",
    skills : ["Unity3D","C#"],
    biopic : "images/fry.jpg",
    display: function(){
        var name = HTMLheaderName.replace("%data%",bio.name);
        var role = HTMLheaderRole.replace("%data%",bio.role);
        $("#header").append(name);
        $("#header").append(role);
        var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        var email = HTMLemail.replace("%data%",bio.contacts.email);
        var github = HTMLgithub.replace("%data%",bio.contacts.github);
        var location = HTMLlocation.replace("%data%",bio.contacts.location);
        var pic = HTMLbioPic.replace("%data%",bio.biopic);
        var msg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
        var contacts = mobile + email + github + location;
        $("#header").append(contacts);
        $("#header").append(pic);
        $("#header").append(msg);
        if(bio.skills.length > 0){
            $("#header").append(HTMLskillsStart);
            for(var i = 0; i < bio.skills.length;i++){
                var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
                $("#header").append(formattedSkill);
            }
        }
        $("#lets-connect").append(contacts);
    }
};

var education = {
    schools:[
        {
            name:"Carnegie Mellon University",
            location:"Pittsburgh, PA",
            degree:"Masters",
            majors:["Entertainment Technology"],
            dates:"2013-2015",
            url:""
        },
        {
            name:"Carnegie Mellon University",
            location:"Pittsburgh, PA",
            degree:"Masters",
            majors:["Entertainment Technology", "ComputerScience"],
            dates:"2013-2015",
            url:""
        }
    ],
    onlineCourses:[
        {
            name:"Frontend Nano Degree",
            school:"Udacity",
            dates:"2016.12-",
            url:""
        }
    ],
    display: function(){
        $("#education").append(HTMLschoolStart);
        for(var i = 0; i < education.schools.length; i++){
            var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
            var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
            var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
            var formattedDates= HTMLschoolDates.replace("%data%",education.schools[i].dates);
            var firstLine = formattedName + formattedDegree;
            $(".education-entry:last").append(firstLine);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedDates);

            for(var j = 0; j < education.schools[i].majors.length; j++){
                var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
                $(".education-entry:last").append(formattedMajor);
            }
        }
        for(var i = 0; i < education.onlineCourses.length; i++){
            var formattedName = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].name);
            var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
            var formattedDates= HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
            var firstLine = formattedName + formattedSchool;
            $(".education-entry:last").append(firstLine);
            $(".education-entry:last").append(formattedDates);
        }
    }

};

var work = {
    jobs:[
        {
            employer:"Realiteer",
            title:"Unity Developer",
            location:"Redwood City, CA",
            dates:"2015-Present",
            description:"Solve"
        }
    ],
    display: function(){
        $("#workExperience").append(HTMLworkStart);
        for(var i = 0; i < work.jobs.length; i++){
            var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + " "+ formattedTitle;
            var formattedDate = HTMLworkDates.replace("%data%",work.jobs[i].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
            var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDate);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        }

    }
};

var projects = {
    projects:[
        {
            title:"Unity Developer",
            dates:"2015.2-2015.5",
            description:"Project 1",
            images:["images/197x148.gif"]
        },
        {
            title:"Unity Developer",
            dates:"2015.2-2015.5",
            description:"Project 2",
            images:["images/197x148.gif","images/197x148.gif"]
        }
    ],
    display:function(){
        $("#projects").append(HTMLprojectStart);
        for(var i = 0; i < projects.projects.length; i++){
            var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
            var formattedDate = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDate);
            $(".project-entry:last").append(formattedDescription);
            if(projects.projects[i].images.length > 0){
                for(var j = 0; j < projects.projects[i].images.length; j++){
                    var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }

    }
};


bio.display();

work.display();
projects.display();
education.display();

$(document).click(function(loc) {
  // your code goes here
  logClicks(loc.screenX, loc.screenY);
});

function inName(fullname){
    var names = fullname.trim().split(" ");
    var first = names[0].slice(0,1).toUpperCase() + names[0].slice(1,names[0].length).toLowerCase();
    var last = names[1].toUpperCase();
    return first +" "+ last;
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
