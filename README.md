# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Simple message board single-page web application prototype.



# DESCRIPTION

The user of this app can append messages to three different channels without authentication.

# DEFECT

If two or more users have the web-app open and one user types text into the input field and submits it, any text on the input fields of
other users will be also wiped clean. 

# INSTALLATION

The user needs to have node.js installed on their machine to run this application properly.

1. npm install

Open the messageboard file inside your desired code editor. Then create a new terminal (node) and check that the current path is in the root of the
messageboard folder. Now you can type npm install. This will install the needed dependencies.

2. npm start

After the installation has finished open up two (node) terminals (current directory in both must be in the root of the messageboard folder).
In the first one, type npm start to start the backend server.
The terminal should say then SERVER RUNNING ON PORT { PORT: 3001 }

(If this port is taken up by another service on your PC, change the PORT constant in the server.js file in the src folder to your liking)

3. npm run dev

Type npm run dev in the second terminal to start web-application. The terminal will tell you the address of the web-app. Usually it's http://localhost:5173/
if the port 5173 is not taken. The app wil take care of that.
Now you can open that address in your browser and start using the app. The channels have some example messages in them.

# USAGE

Upon loading the site, click on a channel in the navbar and a an text-input window for that channel will appear.
You can type out a message to the channel you selected. The text-input field clears upon changing a channel or submitting a message.
The submit buttons greyed out if no text is present.

# BUILT WITH

Vite
React

# SPESIFICATIONS

For the backend/api i used the Express node.js framework. The "database" is a global variable stored in the server.js file,
in the root directory of the folder. I chose express as i have previous experience with it and it's quite minimalistic and simple to set up.

Local state is handled with reducers and a store built with Redux and redux-toolkit components. Synchronization of state is done with redux-state-sync.

a CORS dependency is used to handle traffic between the backend and frontend (from localhost:3001 to localhost:5173 on my machine, the ports may vary
per machine)

For http requests to the backend i used Axios.

# API ENDPOINTS

GET endpoint for querying channels:
http://localhost:3001/channels/

GET endpoint for querying channel’s messages:

http://localhost:3001/messages/<channelId>

Replace the <channelId> with the desired channels id in endpoints above and below.
channel 1 id = 1
channel 2 id = 2
channel 3 id = 3

POST endpoint for submitting messages to a channel:

http://localhost:3001/<channelId>

# CREDITS

Built by Miro Laukkanen for AlphaSense.
contact me at: miro.laukkanen44@gmail.com

#DEMO VIDEO 👍



https://github.com/MiroMuro/MessageBoard/assets/95426094/10a79772-9a9b-4906-940b-82f289f51f7c

