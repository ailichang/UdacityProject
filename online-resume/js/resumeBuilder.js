
var bio = {
    name: "Emily Chang",
    role: "Developer",
    contacts: {
        mobile: "412.608.2527",
        email: "emilyailichang@gmail.com",
        github: "ailichang",
        location: "San Mateo, CA"
    },
    welcomeMessage: "Hello :)",
    skills: ["Unity3D", "C#"],
    biopic: "images/fry.jpg",
    display: function() {
        var name = HTMLheaderName.replace("%data%", bio.name);
        var role = HTMLheaderRole.replace("%data%", bio.role);
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);
        var pic = HTMLbioPic.replace("%data%", bio.biopic);
        var msg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var contacts = mobile + email + github + location;
        $("#topContacts").append(contacts);

        $("#header-info").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
        var title = "<div class=\"center-text\">" + name + role + "</div>";
        $("#header-info").prepend(title);
        $("#header-info").prepend(pic);
        $("#header").prepend(msg);

        $("#footerContacts").append(contacts);
    }
};

var education = {
    schools: [{
            name: "Carnegie Mellon University",
            location: "Pittsburgh, PA",
            degree: "Masters",
            majors: ["Entertainment Technology"],
            dates: "2013-2015",
            url: "https://www.etc.cmu.edu/"
        },
        {
            name: "National Taiwan Normal University",
            location: "Taipei, Taiwan",
            degree: "Bachelor",
            majors: ["Computer Science and Information Engineering"],
            dates: "2013-2015",
            url: "http://w1.csie.ntnu.edu.tw/en/"
        }
    ],
    onlineCourses: [{
        name: "Frontend Nano Degree",
        school: "Udacity",
        dates: "2016.12-Present",
        url: "https://www.udacity.com/"
    }],
    display: function() {
        $("#education").append(HTMLschoolStart);
        for (var i = 0; i < education.schools.length; i++) {
            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#",education.schools[i].url);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var firstLine = formattedName + formattedDegree;
            $(".education-entry:last").append(firstLine);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedDates);

            for (var j = 0; j < education.schools[i].majors.length; j++) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                $(".education-entry:last").append(formattedMajor);
            }
        }
        for (var k = 0; k < education.onlineCourses.length; k++) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].name).replace("#", education.onlineCourses[k].url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
            var combinedLine = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(combinedLine);
            $(".education-entry:last").append(formattedOnlineDates);
        }
    }

};

var work = {
    jobs: [{
        employer: "Realiteer",
        title: "Unity Developer",
        location: "Redwood City, CA",
        dates: "2015.12-Present",
        url:"http://www.realiteer.com/",
        description: "Collaborating with the team to brainstorm ideas, design game mechanics, rapid prototype and implement features for company’s core projects and client products."
    }],
    display: function() {
        $("#workExperience").append(HTMLworkStart);
        for (var i = 0; i < work.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer).replace("#", work.jobs[i].url);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
            var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDate);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        }

    }
};

var projects = {
    projects: [{
            title: "Project 1",
            dates: "2015.2-2015.5",
            description: "A Zombie Game",
            images: ["images/197x148.gif"]
        },
        {
            title: "Project 2",
            dates: "2015.2-2015.5",
            description: "A Virtual Reality Furniture Showroom",
            images: ["images/197x148.gif", "images/197x148.gif"]
        }
    ],
    display: function() {
        $("#projects").append(HTMLprojectStart);
        for (var i = 0; i < projects.projects.length; i++) {
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDate);
            $(".project-entry:last").append(formattedDescription);
            if (projects.projects[i].images.length > 0) {
                for (var j = 0; j < projects.projects[i].images.length; j++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
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

function inName(fullname) {
    var names = fullname.trim().split(" ");
    var first = names[0].slice(0, 1).toUpperCase() + names[0].slice(1, names[0].length).toLowerCase();
    var last = names[1].toUpperCase();
    return first + " " + last;
}
$(internationalizeButton).insertAfter($("#lets-connect").children().last());
$("#mapDiv").append(googleMap);
