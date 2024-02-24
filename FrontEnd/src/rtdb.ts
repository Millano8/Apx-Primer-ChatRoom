import firebase from "firebase"


var app = firebase.initializeApp({
    apiKey: 'bVycAK5UueFS7OkcjzhhnOn7zCD8bKXuzcY22p2Z',
    databaseURL: 'https://apx-agregando-persistencia-default-rtdb.firebaseio.com',
    authDomain: 'apx-agregando-persistencia.firebaseapp.com'
})


const rtdb = firebase.database()


export {rtdb}