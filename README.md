# Test App for DBB Software

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to start App: 

### 1. Make sure that you use needed version of node.js (v16.16.0)

[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) allows you to quickly install and use different versions of node via the command line.

### 2. Install node_modules 
Run `npm install` in the terminal of root folder

### 3. Add REACT_APP_ACCESS_TOKEN to .env file

There is `.env` file in the root folder, it should not be pushed to the repository for real applications, but it was pushed for the current project to simplify the process of testing. 

It contains REACT_APP_ACCESS_TOKEN for a new account that was created for testing. 
You can replace it with your own token. 

To get access token for your account go to [Dropbox API](https://dropbox.github.io/dropbox-api-v2-explorer/#check_app) and authorize with your account. 
Here is credentials for test Dropbox account:

Email: dbb.test.task.dropbox@gmail.com\
Password: DBB_Test_Task

After successfully auth with Google return to [Dropbox API](https://dropbox.github.io/dropbox-api-v2-explorer/#check_app) and press `Get Token` button.\
Then copy created string with an access token.\
Paste it to `.env` for REACT_APP_ACCESS_TOKEN.

### 4. Run react app locally with `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Implemented features

- Dropbox folder explorer (click on folder to open it, click go back to see content of the parent folder)
- Input for path (fill input with full path to the folder and click `go to`) 
- Download file (button available on hover on files)
- Upload File. After choosing local file user should confirm action pressing "Send" button (it supports file size < 150Mb)
- Create new folder (should open prompt for new folder name)
- Open Dropbox file viewer in the new tab when user clicks on file

## Additional info

The project uses the Dropbox SDK, which has an issue with npm packages in its dependencies when the SDK is used on the frontend.\
Several options were considered to solve this problem, one of which was to update the `webpack.config` configuration after each package installation using `npm install`.

Link to [Issue](https://github.com/facebook/create-react-app/issues/682)\
Link to [Solution](https://auth0.com/blog/how-to-configure-create-react-app/)

The process of updating `webpack.config` was automated using a custom npm package that was published on [npm](https://www.npmjs.com).

After installing the [custom package](https://www.npmjs.com/package/saachok-react-scripts) `webpack.config` is now updated automatically, requiring no extra effort from the developer to configure the system for Dropbox SDK to work correctly.
