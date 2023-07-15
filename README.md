# Back-end NodeJS Summer Training
## 1st Week
### Points covered
- Handle your LinkedIn profile.
- Maintain your environment.
  - Installing [VS code](https://code.visualstudio.com/download) or using command line below.
    ```
    sudo apt-get install code
    ```
  - Installing [NodeJS](https://nodejs.org/en/download/) or using command line below.
    ```
    sudo apt-get install nodejs
    sudo apt-get install npm
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