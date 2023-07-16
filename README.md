# Back-end NodeJS Summer Training
## 1st Week
### Points covered
- Handle your LinkedIn profile.
- Maintain your environment.
  - Installing [VS code](https://code.visualstudio.com/download) or using command line below.
    ```
    sudo apt-get install code
    ```
  - Installing [fnm](https://github.com/Schniz/fnm) (fast node version manager).
  - Installing [Git](https://git-scm.com/downloads) or using command line below.
    ```
    sudo apt-get install git
    ```
- It's better to use the name `app.js` or `index.js` for your main file.
- `npm init` initialization and generate `package.json` file.
- `package.json` file contains information about your project and the packages that you use (dependencies).
- `package-lock.json` file contains information about each package that you use.
- `node_modules` folder contains all the packages that you use.
- `npm install <package-name>` to install a package in dependencies.
- `npm install <package-name> --save-dev` to install a package in devDependencies.
- dependencies vs devDependencies.
  - dependencies: packages that are required by your application in general (development & production).
  - devDependencies: packages that are only needed for development and testing.
- `nodemon` package to run your application and restart it automatically whenever you make changes to your code (Watching).
- `Event loop` is a mechanism that allows NodeJS to perform non-blocking I/O operations.

### Tasks

- [X] Create a calculator package using NodeJS.
- [X] Create a validation package using NodeJS.

## 2nd Week
### Points covered
- `APIs` stands for Application Programming Interface.
- `RESTful APIs` stands for Representational State Transfer APIs.
- `HTTPS methods` are used to perform different actions on the same resource.
  - GET: Retrieve data from the server.
  - POST: Send data to the server.
  - PUT: Update data on the server.
  - PATCH: Partially update data on the server.
  - DELETE: Delete data from the server.
- `HTTP status codes` are used to indicate the status of the request.
  - 1xx: Informational.
  - 2xx: Success.
  - 3xx: Redirection.
  - 4xx: Client Error.
  - 5xx: Server Error.
- NodeJS `http` module to create a server.
- `Express` framework to create a server.
- `postman` to test your APIs.

### Resources
- [HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [NodeJS http module](https://nodejs.org/api/http.html)
- [Express framework](https://expressjs.com/)
- [Postman](https://www.postman.com/)
- [RESTful API Designing guidelines](https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9)

### Tasks
- [ ] Build NodeJS Server using ExpressJS Framework