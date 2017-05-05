var functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.updateResult = functions.database.ref('/form-submissions/{uname}')
  .onWrite(event => {
    const original = event.data.val();
    if (original) {
      var result = "Hello " + original.uname + " from Google Cloud Functions! Your age has been recorded as " + original.age + ".";
      return event.data.ref.child('result').set(result);
    }
    return false;
  });

