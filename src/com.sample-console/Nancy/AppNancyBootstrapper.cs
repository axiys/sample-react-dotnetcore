using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Nancy;
using Nancy.Conventions;

namespace com.sample.console.Nancy
{
    public class AppNancyBootstrapper : DefaultNancyBootstrapper
    {
        public AppNancyBootstrapper(IHostingEnvironment environment)
        {
            RootPathProvider = new AppRootPathProvider(environment);
        }

        protected override void ConfigureConventions(NancyConventions conventions)
        {
            base.ConfigureConventions(conventions);

            conventions.StaticContentsConventions.AddDirectory("static");
        }

        protected override IRootPathProvider RootPathProvider { get; }
    }
}
