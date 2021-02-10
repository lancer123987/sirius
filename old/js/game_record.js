$(document).ready(function () {
    // db.ref(game).get() {
    //     console.log(doc.id);

    // };
    db.ref('game').once('value', function (snapshot) {
        var data = snapshot.val();
        console.log(data);
    });
});