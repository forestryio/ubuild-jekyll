// Initialize Firebase
var config = {

    apiKey: "AIzaSyCw7szyT5W-DAvu8BzP3sFyG_UABHu7DtA",
    authDomain: "platform-ai-dev.firebaseapp.com",
    databaseURL: "https://platform-ai-dev.firebaseio.com",
    projectId: "platform-ai-dev",
    storageBucket: "platform-ai-dev.appspot.com",
    messagingSenderId: "314473505880",
    scopes: [
        "email",
        "profile",
        "https://www.googleapis.com/auth/devstorage.read_only",
        "https://www.googleapis.com/auth/cloud-platform.read-only"
    ]
};
firebase.initializeApp(config);