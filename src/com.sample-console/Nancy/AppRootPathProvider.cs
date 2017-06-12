using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Nancy;
using Nancy.Conventions;

namespace com.sample.console.Nancy
{
    public class AppRootPathProvider : IRootPathProvider
    {
        private readonly IHostingEnvironment _environment;

        public AppRootPathProvider(IHostingEnvironment environment)
        {
            _environment = environment;
        }
        public string GetRootPath()
        {
            return _environment.WebRootPath;
        }
    }
}
