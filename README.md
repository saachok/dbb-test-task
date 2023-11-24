# Test App for DBB Software

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to start App: 

### 1. Make sure that you use needed version of node.js (version)

[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) allows you to quickly install and use different versions of node via the command line.

### 2. Install node_modules 
run `npm install` in the root folder

### 3. Add REACT_APP_ACCESS_TOKEN to .env file

There is `.env` file in the root folder, it should not be pushed to the repository for real applications, but it was pushed for the current project to simplify the process of testing. 

It contains REACT_APP_ACCESS_TOKEN for a new account that was created for testing. 
You can replace it with your own token. 

To get access token for your account go to [url](https://) and paste it to the .env  


### 4. run react app locally npm start


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Implemented features

- Dropbox folder explorer (click on folder to open it, click go back to see content of the parent folder)
- input for path (fill input with full path to the folder and click `go to`) 
- Download file (button available on hover on files)
- Upload File (it supports file size < 150Mb)
- Create new folder (should open prompt for new folder name)
- Open Dropbox file viewer in the new tab when user clicks on file
