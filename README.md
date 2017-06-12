Sample-React-DotNetCore
=======================
This is an example of DotNetCore and React JS integration.

com.sample-client/ contains the React JS application. The application consumes a REST API defined in the DotNetCore application com.sample-console/

### Development
You can develop your application and everytime you save your application will dynamic reload the changed parts without destroying your state: aka. hot reload.

Run the DotNetCore com.sample-console/

Inside the com.sample-client/

```
npm install
npm start
open http://localhost:8001
```
You can modify the app/ and you will see changes appearing. 

Click on update and it will call the DotNetCore REST API.

If the ports have changed then modify server.js to proxy to it. Default is http://localhost:49339/ to the DotNetCore.

### Build

This will build the React JS application and place into the wwwroot/static of the DotNetCore project. When you build your DotNetCore application the compiled web application is embedded.

To build run:

```
npm run build
```

Rebuild you DotNetCore application com.sample-console and browse to http://localhost:49339/

Enjoy!