$(document).ready(function () {
    //初始化 firebase
    var config = {
        apiKey: "AIzaSyDlA_6VGaaEOogKMxFFaNvgyPUkBMsQfUg",
        authDomain: "專案 firebaseapp 網址",
        databaseURL: "專案資料庫網址",
        projectId: "baseballsirius",
        storageBucket: "storageBucket",
        messagingSenderId: "messagingSenderId"
    };
    firebase.initializeApp(config);

    var db = firebase.firestore();
});