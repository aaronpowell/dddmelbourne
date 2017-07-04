﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace DevDevDev
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
              name: "submit-a-session",
              url: "submit-a-session",
              defaults: new { controller = "Main", action = "Submit", id = UrlParameter.Optional }
          );

            routes.MapRoute(
             name: "vote",
             url: "vote",
             defaults: new { controller = "Voting", action = "SessionsToVoteFor", id = UrlParameter.Optional }
         );

            routes.MapRoute(
             name: "view-sessions",
             url: "view-sessions",
             defaults: new { controller = "Main", action = "Sessions", id = UrlParameter.Optional }
         );

            routes.MapRoute(
            name: "register",
            url: "register",
            defaults: new { controller = "Main", action = "register", id = UrlParameter.Optional }
        );

            routes.MapRoute(
            name: "agenda",
            url: "agenda",
            defaults: new {controller = "Main", action = "Agenda", id = UrlParameter.Optional}
        );

           routes.MapRoute(
           name: "yow",
           url: "yow",
           defaults: new { controller = "Main", action = "yow", id = UrlParameter.Optional }
       );

           routes.MapRoute(
            name: "code-of-conduct",
            url: "code-of-conduct",
            defaults: new { controller = "Main", action = "CodeOfConduct", id = UrlParameter.Optional }
        );

            routes.MapRoute(
             name: "user-groups",
             url: "user-groups",
             defaults: new { controller = "Main", action = "UserGroups", id = UrlParameter.Optional }
         );

            routes.MapRoute(
             name: "bot",
             url: "bot",
             defaults: new { controller = "Main", action = "Bot", id = UrlParameter.Optional }
        );

            routes.MapRoute(
            name: "Default",
            url: "{controller}/{action}/{id}",
            defaults: new { controller = "Main", action = "Index", id = UrlParameter.Optional }
        );
        }
    }
}