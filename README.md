# Overview
Example firebase and google app engine integration

# Frontend
The frontend is a very simple static website that can be found at public/index.html. It presents the user with a form that asks for their name and age. Once submitted, the frontend will wait for a result to be calculated by the backend and then update the UI with the message.

# Backend
The backend is using Goole Cloud Functions and it listens for new entries in the firebase database at /form-submissions/{name}. When the frontend submits the form, this function is triggered which in turn adds a results field which is a string concatenation of the form data that says: "Hello {name} from Google Cloud Functions! Your age has been recorded as {age}."

The backend function can be found at functions/index.js.

# Demo
A demonstration of this simple firebase application is available here: https://pr-demo.firebaseapp.com/

