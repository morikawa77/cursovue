import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDTD-i7uLqLVUk03hLLRWP5fpjYrNvJmco",
    authDomain: "turnout-77.firebaseapp.com",
    databaseURL: "https://turnout-77.firebaseio.com",
    projectId: "turnout-77",
    storageBucket: "turnout-77.appspot.com",
    messagingSenderId: "1022626657892"
};


export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
