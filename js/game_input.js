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
        db.collection('gameName').doc(docName).set({
            league: league,
            place: place,
            adversary: adversary,
            weather: weather
        });
        db.collection("game").doc(docName).set({});
    });
    // $('#submit').click(function() {
    //     var pitcher = $('.pitcher').val();
    //     var hobit_h = $('.hobit_h').val();
    //     var nick = $('#nick').val();
    //     var hobit_p = $('#hobit_p').val();
    //     var hobit_h = $('#hobit_h').val();
    //     var size_head = $('#size_head').val();
    //     var size_clothes = $('#size_clothes').val();
    //     db.collection("SiriusMember").doc(num).set({
    //         pitcher: pitcher,
    //         hobit: [hobit_p, hobit_h],
    //         size: [size_head, size_clothes],
    //     });
    // });
});