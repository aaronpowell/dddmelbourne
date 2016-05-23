
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
                        "SessionTitle": "OAuth2, IdentityServer3 and integrating it into your current app.",
                        "PresenterName": "Paul Glavich",
                        "SessionAbstract": "Oauth2 is used by many companies such as google and twitter to provide secure authorisation. IdentityServer is an excellent open sourced product on the .Net stack that provides support for the myriad of flows that OAuth2 specifies however it is a large beast to tackle. In this talk, we will talk about why you might want to use IdentityServer and then jump into the how. There is a lot of information distributed on the interwebs on how to do various integration points but this talk will aggregate the most common aspects into one, thrill seeking, token-fest of 'Auth-omness'.",
                        "PresenterEmail": "glav@theglavs.com",
                        "PresenterTwitterAlias": "glav",
                        "RecommendedAudience": "200+ (basic level of .Net and some knowledge of OAuth/token based auth can help)",
                        "PresenterBio": "MVP in ASP.Net for 12 years, ASPInsider, Author of 3 books, CTO of Saasu, Tech nerd, gamer, martial artist.",
                        "PresenterWebsite": "weblogs.asp.net/pglavich"
                    },
                    {
                        "RowKey": "1368bbce-067f-4a99-9348-f8149914bb72",
                        "SessionTitle": "Angular 2 for Angular 1 developers",
                        "PresenterName": "Mohamed Meligy",
                        "SessionAbstract": "Angular 2, TypeScript, RxJS, and maybe SystemJS or Webpack blah blah blah. How does this all come together?\r\n\r\nWhat are the similarities and differences when you work with Angular 2?\r\n\r\nWhat is the experience like, good and bad?\r\n\r\nIn this session we'll explain Angular 2, reflecting on mapping the new concepts to the old concepts whenever possible, and showing the realistic developer experience, as it is.",
                        "PresenterEmail": "eng.meligy@gmail.com",
                        "PresenterTwitterAlias": "meligy",
                        "RecommendedAudience": "Angular 1 developers, with little or no Angular 2 knowledge",
                        "PresenterBio": "Meligy is a Senior Consultant at Readify, you might know him from twitter as@Meligy. He also runs theng-sydney AngularJS usergroup.\r\n\r\nMeligy has been working with ASP.NET since 2002, using ASP.NET MVC since v1 beta, and has been working with AngularJS since 1.0.6.\r\n\r\nHe also writes a newsletter dedicated for AngularJS and ASP.NET developers at gurustop.net.",
                        "PresenterWebsite": "gurustop.net"
                    },
                    {
                        "RowKey": "81cc1e1e-4fcb-47c9-b4f0-cc60776dab52",
                        "SessionTitle": "Event Driven Cloud Computing: Azure Functions vs AWS Lambda",
                        "PresenterName": "Justin Yoo",
                        "SessionAbstract": "Azure Functions has been introduced in Build 2016, which is corresponding to AWS Lambda as a competitor.\r\n\r\nBoth Azure Functions and AWS Lambda are event driven, compute-on-demand experience triggered by events occurring in virtually any cloud service as well as on-premises systems.\r\n\r\nIn this session, I will briefly give a comparison with both services, show a demo how they work, especially writing in C# codes, and how to integrate it into your real world example.",
                        "PresenterEmail": "justin.yoo@kloud.com.au",
                        "PresenterTwitterAlias": "justinchronicle",
                        "RecommendedAudience": "Bit of C# coding - ScriptCS and ASP.NET Core, 300 level",
                        "PresenterBio": "Consultant @ Kloud Solutions, Microsoft MVP, Solutions Architect, Blogger, Beer Lover",
                        "PresenterWebsite": "devkimchi.com"
                    }
                ]
            },
            {
                "time": "11:10",
                "break": true
            },
            {
                "time": "11:20",
                "sessions": [
                    {
                        "RowKey": "3f2d7eda-640a-45b1-946f-7e1323a8d0b9",
                        "SessionTitle": "Thinking like a hacker",
                        "PresenterName": "Julian Berton",
                        "SessionAbstract": "Being able to think like a hacker is an important first step in designing and developing secure software. This talk will go through what motivates cyber criminals, how they can profit from attacking businesses and an overview of how an online, agile, devops, microservice architected, CD/CI, insert buzz word here company is approaching application security.",
                        "PresenterEmail": "jberton@seek.com.au",
                        "PresenterTwitterAlias": "julianberton",
                        "RecommendedAudience": "Focused at a technical audience who develop/build web applications",
                        "PresenterBio": "With a background in software development, Julian spent several years working on web development projects some of which have had security as their main goal. He has since pursued his passion for information security where he is now employed as an Application Security Tester at SEEK.\r\n\r\nJulian is a chapter lead of the OWASP Melbourne chapter where he volunteers his time to organise presentations and run practical security workshops. He also regularly gives application security related presentations aimed to educate developers and the wider security community. A few recent presentations have been at WAHCKon, ASIA, OWASP Melbourne and Node.js meetups.\r\n\r\nIn his spare time he goes rock climbing, attends various meetups and develops security related projects.",
                        "PresenterWebsite": "bertonjulian.github.io/"
                    },
                    {
                        "RowKey": "3d9173c6-9309-4336-9cf6-89ae999eba5e",
                        "SessionTitle": "Web performance lessons from other people's websites",
                        "PresenterName": "Jason Stangroome",
                        "SessionAbstract": "For two years Jason has been improving the performance and scalability of websites he didn't build and often can't change. This session will cover some of the challenges encountered, how they can be addressed, and approaches to avoid them in the first place.",
                        "PresenterEmail": "jason@section.io",
                        "PresenterTwitterAlias": "jstangroome",
                        "RecommendedAudience": "Should have built a website and know how cookies work.",
                        "PresenterBio": "Once a Microsoft developer and release engineer for many years, now a Linux developer focused on web performance and security.",
                        "PresenterWebsite": "section.io"
                    },
                    {
                        "RowKey": "967e4966-af08-4b0d-b6d0-0683ed61d52f",
                        "SessionTitle": "Deploying ASP.NET Core Applications",
                        "PresenterName": "Danijel Malik",
                        "SessionAbstract": "ASP.NET Core is a whole new world for ASP.NET developers because it opens the door to cross-platform development. However, it comes with a hefty price. Not only that it takes some time before you get your hear around, even deployment is now quite different.\r\n\r\nSo how can you bring ASP.NET Core application and DevOps under the same roof?\r\nIn this session you will learn how to deploy ASP.NET Core applications to on-premises IIS, Azure and Docker without compromising the DevOps experience when using tools like Octopus Deploy and Release Management.\r\n\r\nWhat to expect from the session:\r\n\t• Get the understanding of the ASP.NET Core fundamentals\r\n\t• Learn how to deploy ASP.NET Core application using Octopus Deploy\r\n\t• Learn how to deploy ASP.NET Core application using Release Management\r\n\t• Learn how to deploy to a Linux Docker Container",
                        "PresenterEmail": "danijelmalik@ssw.com.au",
                        "PresenterTwitterAlias": "danijelmalik",
                        "RecommendedAudience": "Developers and DevOps engineers",
                        "PresenterBio": "Danijel is a DevOps mastermind with a broad range of technical skills and a deep desire to understand the client's business first. In his career, which includes more than 10 years of professional experience, he has built Desktop, Mobile & Web projects, many of them at the Enterprise level. With an eye on the bleeding edge technologies, he is always one step ahead and loves sharing his experience at user groups and conferences. In 2013, Danijel was awarded Microsoft MVP status for Visual Studio ALM (now Visual Studio and Development Technologies) for his contributions to the community, which he has maintained every year since.",
                        "PresenterWebsite": "danijelmalik.com"
                    }
                ]
            },
            {
                "time": "12:20",
                "break": true,
                "title": "Lunch"
            },
            {
                "time": "13:00",
                "sessions": [
                    {
                        "RowKey": "4a650045-2f77-4439-bf03-8009fb947444",
                        "SessionTitle": "Architecting a microservices solution in .NET",
                        "PresenterName": "Richard Banks",
                        "SessionAbstract": "Buzz word! More buzz words! And another buzz word!!\r\n\r\nNow that that's out of the way, if you're thinking of heading down the microservices path, then how do you do it?\r\n\r\nHow do you build the services? \r\nWhat do you need to think about if you're starting from scratch?\r\nWhat if you're converting a legacy app?\r\nHow do we deal with versioning?\r\nDo we have to use a NoSQL solution, just because Netflix does?\r\nDo we need to use docker/containers?\r\nWhat about the code? Show me the code!\r\n\r\nWell, that's what this session is all about. Designing and building microservices in .NET and then handling a bunch of other concerns that a microservices approach will force you to think about.\r\n\r\nSounds interesting, doesn't it?  You betcha. See you in the session!",
                        "PresenterEmail": "rbanks54@msn.com",
                        "PresenterTwitterAlias": "rbanks54",
                        "RecommendedAudience": "Technical and architect types",
                        "PresenterBio": "This space intentionally left blank. TBA.",
                        "PresenterWebsite": "www.richardbanks.org"
                    },
                    {
                        "RowKey": "43c98752-0898-4654-9bd6-486707f36e13",
                        "SessionTitle": "The State of Mobile Development with JavaScript",
                        "PresenterName": "John Bristowe",
                        "SessionAbstract": "Ask one thousand developers how to build a mobile app with JavaScript and you'll get one thousand different answers. The landscape is filled with a mix of platforms, tools, frameworks, libraries, development strategies, runtime environments, and more. Sorting through it all is a daunting task. That's where this presentation comes in.\r\n\r\nLet's go on a journey through the world of mobile development with JavaScript. We'll explore what developers are doing. We'll review the good, the bad, and the ugly. We'll look at tools and runtime environments. We'll even get our hands a little dirty with some code. You'll walk away with a clear understanding of where we're at and where we're headed.",
                        "PresenterEmail": "john.bristowe@progress.com",
                        "PresenterTwitterAlias": "johnbristowe",
                        "RecommendedAudience": "Developers",
                        "PresenterBio": "Developer Advocate at Telerik/Progress. KendoUI, NativeScript, Web, Mobile. CrossFit, rugby union, and ice hockey. Canadian expat living Down Under.",
                        "PresenterWebsite": "www.bristowe.com/"
                    },
                    {
                        "RowKey": "20312f80-bd26-4aa2-8c55-75a781613744",
                        "SessionTitle": "Web Components and modern web frameworks",
                        "PresenterName": "Ahmad Atighechi",
                        "SessionAbstract": "Web Components is an in progress standard, by which you can teach good old HTML new tricks. Four different building blocks define Web Components, HTML Templates, Custom Elements, HTML Imports and Shadow DOM.  Just like any other web standard different browsers implement the standard in different point of time, hence we polyfill to bridge today to the future. Since web components is future of web, different modern web framework/libraries take web components into consideration and provide some level of support for web components.\r\nIn this session we will review current state of Web Components standard, different browser's support and also current polyfill for web components. We will also review today's big modern web frameworks like Angular 2.0, React, EmberJS and Polymer to see how much support they provide for web components standard.",
                        "PresenterEmail": "ara.mailbox@gmail.com",
                        "PresenterTwitterAlias": "ahmad2x4",
                        "RecommendedAudience": "HTML and Javascript",
                        "PresenterBio": "Ahmad is a senior consultant at Readify, he has more than 16 years of experience working with different development stacks. He has developed a wide range of software including banking and financial systems. His passion is about ALM, Agile and Scrum and mostly spend his time coaching teams become more effective at delivering values.",
                        "PresenterWebsite": "www.ahmadreza.com"
                    }
                ]
            },
            {
                "time": "14:00",
                "break": true
            },
            {
                "time": "14:15",
                "sessions": [
                    {
                        "RowKey": "6f34e04d-991c-44d7-8242-165848e796b1",
                        "SessionTitle": "The Actor/Model pattern in .NET: Akka.Net vs Orleans for the curious",
                        "PresenterName": "William Tulloch",
                        "SessionAbstract": "The actor/model has, of late, become the pattern du jour. In the .NET world the two most cited implementations are AKKA.NET and Orleans. In this talk we look at how these two compare; strength and weaknesses, similarities and differences. Is one better than the other or does it just depend on the right tool for the job?",
                        "PresenterEmail": "william.tulloch@readify.net",
                        "PresenterTwitterAlias": "wtulloch",
                        "RecommendedAudience": "level 200",
                        "PresenterBio": "Originally an art school graduate, William has been involved in software development for over 20 years and is currently working as a Lead Consultant for Readify.",
                        "PresenterWebsite": null
                    },
                    {
                        "RowKey": "259be528-26cd-4a62-b1ae-af7c534e6865",
                        "SessionTitle": "Universal Javascript as a Service",
                        "PresenterName": "Jacob Bass",
                        "SessionAbstract": "How do you:\r\n\r\n* enable applications in any language to use Universal Javascript Components?\r\n* transition your existing tech stack to React when server side rendering is vital to your business?\r\n* use the best frontend tech regardless of your backend?\r\n* serve dynamic bundles of client requested Components?\r\n\r\nI will discuss the solution I've been working on and how it solved the above for teams using different tech stacks, using distributed rendering (backed either by AWS Lambda or individual servers) to provide a la carte universal rendering.",
                        "PresenterEmail": "bassjacob@gmail.com",
                        "PresenterTwitterAlias": "bassjacob",
                        "RecommendedAudience": "no pre-reqs, any level. anyone with an interest in universal components and server-side rendering",
                        "PresenterBio": "Reformed electrical engineer focused on building tooling and improving developer experience (DX ftw!).",
                        "PresenterWebsite": "jacobbass.net"
                    },
                    {
                        "RowKey": "747d3437-1d1a-483e-8e88-72a04a9c3b57",
                        "SessionTitle": "Run Faster Damn It!",
                        "PresenterName": "Luke Drumm",
                        "SessionAbstract": "It's 2016 and everything should be instantaneous... but it's not.\r\n\r\nCome for a little sight seeing trip behind the scenes into the weird and wonderful world of hardware that's stopping your software from working even faster!\r\n\r\nLearn the mysterious knowledge that previously only people with beards and overly stretched AD&D shirts were allowed to know.\r\n\r\nDiscover the secrets that people who like to needlessly keep secrets probably didn't want you to know.\r\n\r\nExpose your brain to yet more new stuff... because it's fun.",
                        "PresenterEmail": "lzcd@hotmail.com",
                        "PresenterTwitterAlias": null,
                        "RecommendedAudience": "Anyone / everyone",
                        "PresenterBio": "A long time senior code wrangler for Readify who once wrote a book, received a number of MVP awards, spoke to a lot of people about writing games and only admits to walking into a lamp post once.",
                        "PresenterWebsite": null
                    }
                ]
            },
            {
                "time": "15:20",
                "sessions": [
                    {
                        "RowKey": "b302ca29-6f72-47b8-adb1-282708ff92d8",
                        "SessionTitle": "Exploring C# 7 - Live Coding",
                        "PresenterName": "Michael Ridland",
                        "SessionAbstract": "In this sessions we'll look into the features proposed for C#7 in a live coding environment. Come to this session to see how features like Annotated Types, Nullable Reference Types,  Local functions , Tuples and Pattern matching all done LIVE.",
                        "PresenterEmail": "rid00z@gmail.com",
                        "PresenterTwitterAlias": "rid00z",
                        "RecommendedAudience": "All Developers",
                        "PresenterBio": "Michael Ridland is the founder and Technical Director of XAM Consulting. Awarded as a Xamarin MVP for 2 years, he also loves to blog and speak. He's the creator of the FreshMvvm Framework for Xamarin.Forms. Michael has been leading Xamarin projects years and delivered some of the highest quality enterprise apps in the market. He’s a passionate community leader and founded the Xamarin hack days.",
                        "PresenterWebsite": "www.michaelridland.com"
                    },
                    {
                        "RowKey": "46844720-f562-4b0b-83ed-1b43c27ba580",
                        "SessionTitle": "Using Device APIs with Web Applications",
                        "PresenterName": "Jessica Claire Edwards",
                        "SessionAbstract": "For accessing information about a device, native applications have long had the upper hand over web applications. Times are changing, however, and with the range of client-side device APIs currently available or in development, we are slowly but surely closing the gap between web and native experiences.\r\n\r\n In this presentation, I will provide a high level overview of the range of client-side APIs that have been proposed. Of course, it's no fun if we can't use it- we will also explore how to implement some of the better supported features, such as media capture and device motion, and some 'gotchas' you are likely to encounter.",
                        "PresenterEmail": "jessica@eml.cc",
                        "PresenterTwitterAlias": "jsscclr",
                        "RecommendedAudience": "Developers",
                        "PresenterBio": "Jessica is a Creative Developer at Touch Create, where she helps create brand experiences for smart screens. Working in the mobile web space, she is passionate about leveraging hardware capabilities and delivering performant websites without compromising visual experiences.",
                        "PresenterWebsite": null
                    },
                    {
                        "RowKey": "9cfc37a2-e2de-4675-8cac-a8208d1e3668",
                        "SessionTitle": "Holographic Programming – Exploring the HoloLens",
                        "PresenterName": "Lars Klint",
                        "SessionAbstract": "Virtual reality and augmented reality are terms most developers and technical enthusiasts recognize. What about “Mixed reality”? A reality that is part real world, part digital world, a reality that is enhanced with Holograms. Microsoft’s HoloLens introduces users to an entirely new way of thinking about computing. Learn how to use the Holographic Development Kit (HDK) to build completely new experiences that will blow your mind (only figuratively, I hope), and get a sense for what is possible. You will be challenged to think of how to solve problems in an entirely new way that leverage holographic projections, to provide intuitive natural interactions with the digital world.",
                        "PresenterEmail": "me@larsklint.com",
                        "PresenterTwitterAlias": "larsklint",
                        "RecommendedAudience": "Holographic Adventurer Level 42",
                        "PresenterBio": "Lars is a solution architect, Pluralsight Author, Microsoft MVP, writer, podcast host and keen tech geek with a passion for the Microsoft ecosystem.  He is a stickler for best practices and using industry standards to produce awesome, robust and maintainable software. He was selected among 10 in the world to participate in Nokia’s FutureCapture hackathon in Sweden, developing cutting edge prototypes for the Nokia Lumia phones and won the Melbourne AppFest for his Image of The Day Windows Phone Application. He continues to develop Universal Windows apps for Windows 10.\r\nAs a frequent blogger, Lars is a writer for Pluralsight, Gooroo.io, Supersite for Windows and his own blog at larsklint.com, often presenting arguments that are not quite main stream, but with a dash of humour and a smidgen of cheekiness. Lars is co-founder of the DDD Melbourne community event with over 350 participants, now in its seventh year running and has presented at various technical events, both nationally and internationally.",
                        "PresenterWebsite": "larsklint.com"
                    }
                ]
            }
        ]
    };

    $scope.keynote = {
        "SessionTitle": "Integration lessons for the green-field developer",
        "PresenterName": "Udi Dahan",
        "SessionAbstract": "While many developers have had the “pleasure” of integrating with 3rd party systems and legacy applications, most don’t see the need to use those approaches when building new code. Unfortunately, it is that belief that undermines the success of many a green-field project resulting in a patch-work of batch jobs being added to try and compensate for the eventually *inconsistent* behavior of the system. Join Udi for a deep-dive into API design, integration patterns, and some good old message queues and see how you can avoid creating yet another big ball of mud.",
        "PresenterBio": "Software Development Rocket Scientist Founder and CEO of NServiceBus",
        "PresenterTwitterAlias": "UdiDahan",
        "PresenterWebsite": "http://udidahan.com/"
    };

    $scope.locknote = {
        "Session title": "Locknote Panel",







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
