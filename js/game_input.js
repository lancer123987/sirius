$(document).ready(function() {
    $('.gameData__submit').click(function() {
        var date = $('.date').val();
        var gameType = $('.gameType').val();
        var league = $('.league').val();
        var place = $('.place').val();
        var adversary = $('.adversary').val();
        var weather = $('.weather').val();
        var docName = gameType + date
            // var docName = docName.toString();
        console.log(docName);
        db.collection("gameName").doc(ttt).set({
            league: league,
            place: place,
            adversary: adversary,
            weather: weather
        });
        db.collection("game").doc(ttt).set({});
    });
    // $('#submit').click(function() {
    //     var num = $('#num').val();
    //     var name = $('#name').val();
    //     var nick = $('#nick').val();
    //     var hobit_p = $('#hobit_p').val();
    //     var hobit_h = $('#hobit_h').val();
    //     var size_head = $('#size_head').val();
    //     var size_clothes = $('#size_clothes').val();
    //     db.collection("SiriusMember").doc(num).set({
    //         name: [name, nick],
    //         hobit: [hobit_p, hobit_h],
    //         size: [size_head, size_clothes],
    //     });
    // });
});