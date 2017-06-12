using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Nancy;
using Nancy.Conventions;

namespace com.sample.console.Nancy
{
    public sealed class AppNancyModule : NancyModule
    {
        public AppNancyModule()
        {
            Get("/", _ => View["index"]);
//            Get("/{fileName}", parameters => View[parameters.fileName]);
        }
    }
}
