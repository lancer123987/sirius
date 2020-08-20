$(document).ready(function() {
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

    $('#submit').click(function() {
        var num = $('#num').val();
        var name = $('#name').val();
        var nick = $('#nick').val();
        var hobit_p = $('#hobit_p').val();
        var hobit_h = $('#hobit_h').val();
        var size_head = $('#size_head').val();
        var size_clothes = $('#size_clothes').val();
        db.collection("SiriusMember").doc(num).set({
            name: [name, nick],
            hobit: [hobit_p, hobit_h],
            size: [size_head, size_clothes],
        });
    });
});