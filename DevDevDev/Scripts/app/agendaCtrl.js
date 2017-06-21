
var myAppModule = angular.module('ddd', []);

angular.module('ddd');

function agendaCtrl($scope) {

    $scope.rawSessions = {
        "timeslots": [
            {
                "time": "10:10",
                "sessions": [
                    {
                        "RowKey": "7b15bfb2-aad9-4c01-8832-9f81cd13e76d",
                        "SessionTitle": "Microservices UI Composition",
                        "PresenterName": "Hadi Eskandari",
                        "SessionAbstract": "There's a lot of buzz around designing your Microservices on the backend, but surprisingly there's very little content on how things should be done on the frontend. This talk is about challenges you face when creating a UI for your Microservices and need to ensure service boundaries are respected while the code is still maintainable.",
                        "PresenterEmail": "h.eskandari@gmail.com",
                        "PresenterTwitterAlias": "hadi_es",
                        "RecommendedAudience": "The example shown in this talk leverage ASP.NET Core and Google Polymer. Understanding of web and Microservices is helpful.",
                        "PresenterBio": "Hadi is a Software Engineer at Particular Software, creators of NServiceBus.",
                        "PresenterWebsite": "www.seesharpsoftware.com.au/"
                    },
                    {
                        "RowKey": "1368bbce-067f-4a99-9348-f8149914bb72",
                        "SessionTitle": "Chatbots explained",
                        "PresenterName": "Azadeh Khojandi",
                        "SessionAbstract": "Apps are dying, and bots are taking over. It is clear to everyone that interacting with a bot in messaging apps is way more convenient than downloading a new app.",
                        "PresenterEmail": "azadeh.khojandi@microsoft.com",
                        "PresenterTwitterAlias": "azadehkhojandi",
                        "RecommendedAudience": "intermediate level, Familiar with using rest APIs",
                        "PresenterBio": "Microsoft Technical Evangelist and Sitecore MVP with more than 10 years experience across a range of diverse and exciting web and mobile solutions. Az is co-organiser of girls geek dinner and sydney sitecore user group. She recently started Girls .Net user group. Az has worked with clients including Vodafone, KFC Australia, Sydney Airport, Lend Lease, Sydney Olympic Park.",
                        "PresenterWebsite": "azadehkhojandi.blogspot.com/"
                    },
                    {
                        "RowKey": "81cc1e1e-4fcb-47c9-b4f0-cc60776dab52",
                        "SessionTitle": "TypeScript 2.3, The What, The Why, And The How!",
                        "PresenterName": "Meligy",
                        "SessionAbstract": "Have you started working with TypeScript 2.x yet? Have you started working with TypeScript at all?",
                        "PresenterEmail": "eng.meligy@gmail.com",
                        "PresenterTwitterAlias": "meligy",
                        "RecommendedAudience": "Intermediate JavaScript Developers",
                        "PresenterBio": "Meligy is a consultant and mentor in the web space. He is mostly focused on helping developers using Angular with .NET.",
                        "PresenterWebsite": "www.gurustop.net"
                    }
                ]
            },
            {
                "time": "11:00",
                "break": true
            },
            {
                "time": "11:20",
                "sessions": [
                    {
                        "RowKey": "3f2d7eda-640a-45b1-946f-7e1323a8d0b9",
                        "SessionTitle": "Resilience in micro-service world - Mad Max style",
                        "PresenterName": "John Di Zhang",
                        "SessionAbstract": "How do we define \"service resilience\" in a micro-service oriented architecture? ",
                        "PresenterEmail": "zhangdijohn@gmail.com",
                        "PresenterTwitterAlias": "dizhang",
                        "RecommendedAudience": "medium",
                        "PresenterBio": "Senior Software Developer at Domain",
                        "PresenterWebsite": "medium.com/@zhangdijohn"
                    },
                    {
                        "RowKey": "3d9173c6-9309-4336-9cf6-89ae999eba5e",
                        "SessionTitle": "Solving real life problems with machine learning",
                        "PresenterName": "Dom Raniszewski",
                        "SessionAbstract": "Have you ever thought about machine learning but didn't know where to start? This session is about how to take something from your day to day life and turn it into a machine learning problem. ",
                        "PresenterEmail": "dominik.raniszewski@outlook.com",
                        "PresenterTwitterAlias": "dominikran",
                        "RecommendedAudience": "machine learning, software developers",
                        "PresenterBio": "Lead Consultant @ Readify",
                        "PresenterWebsite": "devblog.xyz/"
                    },
                    {
                        "RowKey": "967e4966-af08-4b0d-b6d0-0683ed61d52f",
                        "SessionTitle": "Serverless with Azure Functions",
                        "PresenterName": "Hossam Barakat",
                        "SessionAbstract": "Over the last decade, we have seen many technology trends from monolithic applications to microservices and recently the rise of serverless event driven functions.",
                        "PresenterEmail": "hossam.eldeen@gmail.com",
                        "PresenterTwitterAlias": "hossambarakat_",
                        "RecommendedAudience": "This session level is 200, no prerequisite knowledge required",
                        "PresenterBio": "Software consultant interested in web development, application architecture, microservices, serverless architecture and agile methodologies.",
                        "PresenterWebsite": ""
                    }
                ]
            },
            {
                "time": "12:10",
                "break": true,
                "title": "Lunch"
            },
            {
                "time": "13:10",
                "sessions": [
                    {
                        "RowKey": "4a650045-2f77-4439-bf03-8009fb947444",
                        "SessionTitle": "How Docker improved the way we build and ship software",
                        "PresenterName": "Jason Stangroome",
                        "SessionAbstract": "I have always pushed for parity between the Production and Development environments, and the environments in between, to provide confidence in deploying new software and to reduce cycle times.",
                        "PresenterEmail": "jason@section.io",
                        "PresenterTwitterAlias": "jstangroome",
                        "RecommendedAudience": "Developers who care about their code running correctly in Production",
                        "PresenterBio": "Jason was a developer, sysadmin and Continuous Delivery advocate on the Windows platform for 15 years but switched to the Linux platform in 2014 where he now focuses on security and Site Reliability Engineering.",
                        "PresenterWebsite": "blog.stangroome.com"
                    },
                    {
                        "RowKey": "43c98752-0898-4654-9bd6-486707f36e13",
                        "SessionTitle": "A Developer's Guide to Fluent Design",
                        "PresenterName": "Nick Randolph",
                        "SessionAbstract": "The Windows platform is welcoming in a new era of innovation as it takes on a new design philosophy. Fluent Design is based on the building blocks of Light, Depth, Motion, Material and Scale, and with it applications built for the Windows platform will appear richer and more intuitive to use than ever before.",
                        "PresenterEmail": "nick@builttoroam.com",
                        "PresenterTwitterAlias": "thenickrandolph",
                        "RecommendedAudience": "This is an overview session covering the fundamentals of Fluent Design as it applies to the UWP platform. Prior knowledge of the UWP platform, or other XAML based technology (eg Silverlight/WPF), is useful. Samples and Demos will use a mix of XAML and C# code.",
                        "PresenterBio": "Nick currently runs Built to Roam which focuses on building rich mobile applications. Nick has been identified as a Microsoft MVP in recognition of his work and expertise with the Microsoft mobile platforms. He is still an active contributor in the device application development space via his blog at http://nicksnettravels.builttoroam.com and Visual Studio Magazine (http://visualstudiomagazine.com/Articles/List/Mobile-Corner.aspx). Nick has been invited to present at a variety of events including Tech Ed and Ignite Australia & NZ, DDD and local user groups. He has also authored multiple books with the latest being Professional Visual Studio 2010 and Professional Development for Windows Phone, and helped judge multiple world finals for the Imagine Cup. Nick has worked on numerous mobile applications and has helped hundreds of developers build their own mobile applications. Nick has been involved with applications for well-known brands such as Domain.com.au, ninemsn, AFL, NRL, Qantas, JB Hi-Fi, NAB, Stan and Boost Juice",
                        "PresenterWebsite": "nicksnettravels.builttoroam.com"
                    },
                    {
                        "RowKey": "20312f80-bd26-4aa2-8c55-75a781613744",
                        "SessionTitle": "Testing, Testing, Testing! Are Serverless Applications Testable? - Azure Functions & Logic Apps",
                        "PresenterName": "Justin Yoo",
                        "SessionAbstract": "Testing applications is more than important nowadays. Traditionally, developers perform unit tests and/or integration tests in variety of environments. Now, we see serverless applications. How can we test those applications? That's a trick question. ",
                        "PresenterEmail": "justin.yoojh@gmail.com",
                        "PresenterTwitterAlias": "justinchronicle",
                        "RecommendedAudience": "Developers having basic knowledge about Azure Functions and/or Logic Apps (level 300)",
                        "PresenterBio": "Developer, Consultant, Technical Architect, Speaker, Writer & Microsoft MVP",
                        "PresenterWebsite": "devkimchi.com"
                    }
                ]
            },
            {
                "time": "14:00",
                "break": true
            },
            {
                "time": "14:20",
                "sessions": [
                    {
                        "RowKey": "6f34e04d-991c-44d7-8242-165848e796b1",
                        "SessionTitle": "Using Docker to supercharge .NET development on Linux",
                        "PresenterName": "Alistair Chapman",
                        "SessionAbstract": "With the release of .NET Core, the long-awaited dream of running .NET natively on Linux is finally here! Even better, .NET Core has arrived just in time for the coming container revolution!",
                        "PresenterEmail": "alistair@agchapman.com",
                        "PresenterTwitterAlias": "agc93",
                        "RecommendedAudience": "This talk will be focussing almost exclusively on developing on Linux so is perfect for .NET developers new to the platform as well as Linux gurus who may not have gotten their hands dirty with .NET Core yet.",
                        "PresenterBio": "Alistair Chapman is an Australian InfoSec engineer, .NET developer and technical architect. While he’s currently working at Red Hat, he’s also spent years doing everything from network engineering to DevOps consulting, governance research to embedded development. Currently, his passion is security architecture, cross-platform .NET and containerisation.",
                        "PresenterWebsite": "blog.agchapman.com/"
                    },
                    {
                        "RowKey": "259be528-26cd-4a62-b1ae-af7c534e6865",
                        "SessionTitle": "What a modern DevOps looks like today",
                        "PresenterName": "Danjel Malik",
                        "SessionAbstract": "Modern DevOps is a highway to greater business value and it works cross-platform. Automated deployments solved a handover problem, Application Monitoring Platforms closed the feedback and crash reporting gap, and containers made the \"works on my machine\" stereotype real. Next mission: automated environments.",
                        "PresenterEmail": "danijelmalik@ssw.com.au",
                        "PresenterTwitterAlias": "danijelmalik",
                        "RecommendedAudience": "Anyone with some basic understanding of DevOps",
                        "PresenterBio": "Danijel is a DevOps mastermind with a broad range of technical skills and a deep desire to understand the client's business first. In his career, which includes more than 10 years of professional experience, he has built Desktop, Mobile & Web projects, many of them at the Enterprise level. With an eye on the bleeding edge technologies, he is always one step ahead and loves sharing his experience at user groups and conferences. In 2013, Danijel was awarded Microsoft MVP status for Visual Studio ALM (now Visual Studio and Development Technologies) for his contributions to the community, which he has maintained every year since.",
                        "PresenterWebsite": "danijelmalik.com"
                    },
                    {
                        "RowKey": "747d3437-1d1a-483e-8e88-72a04a9c3b57",
                        "SessionTitle": "Automating API testing using Postman",
                        "PresenterName": "Klee Thomas & Anjali Wadhwa",
                        "SessionAbstract": "Microservices / web services is not a new buzz word in software world, however the quest for testing it better is the current challenge. As this approach of building software is becoming popular, the need for broader coverage and deeper testing is extremely crucial. In this talk we will Share:",
                        "PresenterEmail": "klee.ut@gmail.com",
                        "PresenterTwitterAlias": "kleeut",
                        "RecommendedAudience": "Anyone interested in API development, testing and QA automation.",
                        "PresenterBio": "Klee is a Software Developer working at nib and organiser of the Newcastle Coders Group. He's Clean Code and Craftsmanship advocate. Outside of software development fan of Martial Arts, Neftlix and spending time with his wife and cats. ",
                        "PresenterWebsite": null
                    }
                ]
            },
            {
                "time": "15:10",
                "break": true,
                "title": "Change rooms, stretch legs, have a chat"
            },
            {
                "time": "15:20",
                "sessions": [
                    {
                        "RowKey": "b302ca29-6f72-47b8-adb1-282708ff92d8",
                        "SessionTitle": "Avoiding death by a thousand containers. Kubernetes to the rescue!",
                        "PresenterName": "Hesham Amin",
                        "SessionAbstract": "So you packaged your application as a docker container and started enjoying the portability, repeatability and light-weight isolation it brings. That's awesome! Now you want to launch your product and scale it to hundreds or maybe thousands of containers. Only to find that it's much harder than \"docker start\".",
                        "PresenterEmail": "hspceng@gmail.com",
                        "PresenterTwitterAlias": "heshamamin",
                        "RecommendedAudience": "Basic knowledge of docker is preferable.",
                        "PresenterBio": "Senior consultant. I'm interested in cloud computing and Agile methodologies.",
                        "PresenterWebsite": "heshamamin.com/"
                    },
                    {
                        "RowKey": "46844720-f562-4b0b-83ed-1b43c27ba580",
                        "SessionTitle": "Computers have feelings too!",
                        "PresenterName": "Paul Glavich",
                        "SessionAbstract": "Well not quite, but they can detect them. This talk will explore Microsoft Cognitive Services in Azure. We'll take a look at the offerings overall, and then take a deeper look into specifics such as Sentiment analysis, Computer vision (image recognition) and Emotion detection.",
                        "PresenterEmail": "glav@theglavs.com",
                        "PresenterTwitterAlias": "glav",
                        "RecommendedAudience": "azure, level 300",
                        "PresenterBio": "Paul is an old nerd, ex MVP of 13 years, ASPInsider, readify principal consultant, book author, code monkey and likes long walks on the beach.",
                        "PresenterWebsite": "weblogs.asp.net/pglavich"
                    },
                    {
                        "RowKey": "9cfc37a2-e2de-4675-8cac-a8208d1e3668",
                        "SessionTitle": "Simplified Unit Testing with the Entity Framework Core InMemory Provider",
                        "PresenterName": "Jason Taylor",
                        "SessionAbstract": "In this talk, we'll look at how using the EF Core InMemory Provider will simplify your unit testing approach. We will discuss the typical approach versus the simplified approach, limitations, and other considerations. You will walk away ready to write simplified unit tests for systems that depend on EF Core.",
                        "PresenterEmail": "jasongt@outlook.com",
                        "PresenterTwitterAlias": "jasongtau",
                        "RecommendedAudience": "200 – knowledge of ASP.NET / EF / C#",
                        "PresenterBio": "Jason is an SSW Solution Architect and full stack developer with over 15 years professional experience. He is currently specialising in teaching and building awesome applications utilising ASP.NET Core, EF Core and Angular. Jason loves a challenge and is skilled at progressing from a proposal into a well-defined, coded, and tested solution.",
                        "PresenterWebsite": "www.codingflow.net"
                    }
                ]
            }
        ]
    };

    $scope.keynote = {
        "SessionTitle": "TBD",
        "PresenterName": "Tatham Oddie",
        "SessionAbstract": "Coming soon",
        "PresenterBio": "With experience ranging from his own small businesses, to large multi-year multi-vendor banking programs, Tatham has developed a deep understanding of the complete lifecycle of IT programs and their surrounding business drivers. He is a regular presenter at conferences and events throughout Australia, North America, and Europe. In his role as Readify's CIO, Tatham helps Readify improve its own processes, as well as those of our customers.",
        "PresenterTwitterAlias": "tathamoddie",
        "PresenterWebsite": "tath.am/"
    };

    $scope.locknote = {
        "PresenterName": "Katie McLaughlin",
        "SessionTitle": "JavaScript is Awe-Ful",
        "SessionAbstract": "JavaScript is an incredibly powerful language, and thanks to its renaissance, it now has uses that extend beyond the browser. However, being a language that's extremely accessible, with a shallow learning curve and large userbase, it's the subject of - at times - vitriolic abuse from other language communities. Yes, JavaScript was created in a very short timeframe, and there are inherent issues with some very early design decisions that can cause some grief to developers. However, as the engine that powers the web, it's able to prove it's versatility and usefulness.So why the hate? In this talk, we will discuss the history of JavaScript, it's future, and how some it's 'wat's can be avoided in everyday use in other to leverage the power of this universal language.We will also take a short tour through over a dozen other languages and some of their quirks, to prove how no language is without fault.",
        "PresenterBio": "Katie has worn many different hats over the years. She has been a software developer for many languages, systems administrator for multiple operating systems, and speaker on many different topics. When she's not changing the world, she enjoys cooking, making tapestries, and yelling at JavaScript and its attempt at global variables.",
        "PresenterTwitterAlias": "glasnt",
        "PresenterWebsite": "glasnt.com"
    };

    $scope.ShowDetail = false;
    $scope.SessionTitle = '';
    $scope.PresenterName = '';
    $scope.PresenterTwitterAlias = '';
    $scope.PresenterWebsite = '';
    $scope.SessionAbstract = '';
    $scope.RecommendedAudience = '';

    $scope.showSession = function (session) {

        $scope.ShowDetail = true;

        if (session == null) return;

        $scope.SessionTitle = session.SessionTitle;
        $scope.PresenterName = session.PresenterName;
        $scope.PresenterTwitterAlias = session.PresenterTwitterAlias;
        $scope.PresenterWebsite = session.PresenterWebsite;
        $scope.SessionAbstract = session.SessionAbstract;
        $scope.RecommendedAudience = session.RecommendedAudience;

        $('#session-modal').foundation('reveal', 'open');

    };

}
