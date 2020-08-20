$(document).ready(function () {
    //初始化 firebase
    var firebaseConfig = {
        apiKey: "AIzaSyDlA_6VGaaEOogKMxFFaNvgyPUkBMsQfUg",
        authDomain: "baseballsirius.firebaseapp.com",
        databaseURL: "https://baseballsirius.firebaseio.com",
        projectId: "baseballsirius",
        storageBucket: "baseballsirius.appspot.com",
        messagingSenderId: "254226143983",
        appId: "1:254226143983:web:85852267eecb7dde"
    };
    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();

    function storedata() {
        db.collection("SiriusMember").doc("002").set({
            name: ["Lancer", "00"]
        });
    }

    $('#submit').click(function () {
        db.collection("SiriusMember").doc("002").set({
            name: ["Lancer", "00"]
        });
    });
});