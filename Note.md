# Reminders on Amazon
 #### css modularity
  - `import classes from 'path'`
  - `className = 'classes.classname'`
 #### React Carousel
  - `npm i react-responsive-carousel`
  - `import "react-responsive-carousel/lib/styles/carousel.min.css";`
 #### API
  - `https://fakestoreapi.com/docshttps://fakestoreapi.com/docs`
 #### Picing & rating
  - material ui => rating
  `npm install @mui/material @emotion/react @emotion/styled`
  - numeral.js => pricing
  
 #### Loading effect
  - React spinners `https://www.davidhu.io/react-spinners/`
  - `npm i react-spinner`
  

 #### Images
 - `pngimg.com`


### Firebase Authentication
 * create project in firebase 
 * to use the authentication service we enabled any sign in methods (email and password)
 * create firebase.js file and use the configuration code from firebase
 * `import {getAuth} from 'firebase/auth'` to use the authentication we import getAuth
 * `export const auth = getAuth(app);` export it to use in our components
 * 
  ```
   *** to sign up and sign in 
    import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

    import{auth} from "../../utils/firebase" // import the exported auth

    *** to sign up := createUserWithEmailAndPassword(auth, email, password)
      * it returns a promise with a user credintial object

      *** to sign in := signInWithEmailAndPassword(auth, email, password)
        * also returns a promise with a userCredential object that contains additional data like a token
  ```


### Building Backend with firebase
 #### to set up the firebase function for our backend
   - we use firebase CLI to use firebase tools in the terminal `https://firebase.google.com/docs/cli` the documentation of firebase CLI
   - `npm i firebase-tools -g` := globally install firebase tools
   - `firebase --version` := to check the version and our firebase is ready to use
  ##### Tips:= if we install firebase-tools and still get an error when we run firebase commands
    * check if firebase-tools are installed globally `npm list -g` := this list all globally installed packages with their path. if firebase-tools is not there we have to install it again
    * if the package is already installed but the command is not working we have to add the path we get from `npm list -g` to the environmental variable path.
    * restart the terminal and run again
 #### set up the backend (firebase function)
  * `firebase init` :- to initialize the backend 
  * select functions to initialize our backend initial files

#### serve our express backend through firebase
 * Go to functions => index.js(this is where we write our code)
 * to listen the request we listen through firebase `export.api = onRequest(app)`
 * `const { onRequest } = require("firebase-functions/v2/https");` 
 * to start the server we use the script serve from firebase function `npm run serve`