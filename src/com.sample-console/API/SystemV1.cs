using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Nancy;

namespace com.sample.console.api.client
{
    public class SystemV1 : NancyModule
    {
        public SystemV1()
        {
            Get("/api/v1/system/now", r => DateTime.UtcNow.ToString("R"));
        }
    }
}
