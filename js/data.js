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

    $('#submit').click(function () {
        var num = $('#num').val();
        var name = $('#name').val();
        var hobit_p = $('#hobit_p').val();
        var hobit_h = $('#hobit_h').val();
        db.collection("SiriusMember").doc(num).set({
            name: ["Lancer", name],
            hobit_p: hobit_p,
            hobit_h: hobit_h
        });
    });
});