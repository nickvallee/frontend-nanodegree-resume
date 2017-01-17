
//// BIO
var bio = {
    "name": "Nick Vallee",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "514-402-5451",
        "email": "nickvallee@gmail.com",
        "github": "github.com/nickvallee",
        "twitter": "twitter.com/NickVallee",
        "location": "Montreal"
    },
    "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "skills": [
        "HTML", "CSS", "JAVASCRIPT", "GitHub", "Node.js", "Swift"
    ],
    "bioPic": "images/udacity-profile-pic.jpg",
    "display": function() {
        var name = HTMLheaderName.replace("%data%", bio.name);
        var role = HTMLheaderRole.replace("%data%", bio.role);

        $("#header").prepend(name, role);

        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#topContacts").prepend(mobile, email, twitter, github, location);

        var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);

        $("#header").append(bioPic, welcomeMessage);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            for (skill in bio.skills) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#header").append(formattedSkill);
            }

        }

        $("#footerContacts").append(mobile, email, twitter, github);

    }
}

///EDUCATON

var education = {
    "schools": [{
        "name": "Concordia University",
        "dates": "2007-2010",
        "location": "Montreal",
        "url": "https://www.concordia.ca/",
        "Majors": ["Political Science", "History"]
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/"
    }, {
        "title": "Git A Web Developer Job",
        "school": "Udemy",
        "dates": "2016",
        "url": "https://www.udemy.com"
    }, {
        "title": "Front-End Devlopment Certificate",
        "school": "Free Code Camp",
        "dates": "2016-2017",
        "url": "https://www.freecodecamp.com"
    }],

    "display": function() {

        $("#education").append(HTMLschoolStart);

        for (school in education.schools) {
            var name = HTMLschoolName.replace("%data%", education.schools[school].name);
            var dates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var location = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var majors = HTMLschoolMajor.replace("%data%", education.schools[school].Majors);

            console.log(name, dates, location);

            $("#education").append(name, dates, location, majors);
        }

        $("#education").append(HTMLonlineClasses);

        for (course in education.onlineCourses) {
            var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var dates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            var url = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

            $("#education").append(title, school, dates, url);
        }

    }
}

/////WORK

var work = {
    "jobs": [{
            "employer": "Folly and the Hunter",
            "title": "Band Manager",
            "location": "Montreal",
            "dates": "2010-2017",
            "description": "Responsibilities include managing money, applying for grants, maintaining social media presence, updating our website and managing tour logistics. Communicating constantly online with industry professionals, including publishers and licensers."
        }, {
            "employer": "Apple",
            "title": "Specialist",
            "location": "Montreal",
            "dates": "2011-2014",
            "description": "Guided customers in finding the best solution for their particular needs regarding Apple products, which included a significant amount of troubleshooting and tech support. Helped determine whether customers required a Genius Bar appointment or not."
        }, {
            "employer": "Idea",
            "title": "Tech Support",
            "location": "Montreal",
            "dates": "2011",
            "description": "Provided tech support for pharmaceutical representatives on MERC’s VPN, and the software and hardware associated with it. Gained experience in closing tickets, using supporting documentation to find solutions, and helping professionals with time sensitive problems."
        }

    ],
    "display": function() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $(".work-entry:last").append(formattedEmployerTitle, formattedWorkDate, formattedWorkLocation, formattedWorkDescription);
        }
    }
}

///PROJECTs

var projects = {
    "projects": [{
        "title": "Portfolio Page",
        "dates": 2016,
        "description": "it is my website porfolio, behold",
        "images": ["http://placehold.it/400x200"]
    }, {
        "title": "weather app",
        "dates": 2016,
        "description": "you can see the weather with this",
        "images": ["http://placehold.it/400x200"]

    }, {
        "title": "some other project",
        "dates": 2016,
        "description": "this project will be amazing",
        "images": ["http://placehold.it/400x200"]
    }],
    "display": function() {

        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedWorkDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedWorkDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

//INSTANCES OF DISPLAY

bio.display();
work.display();
projects.display();
education.display();