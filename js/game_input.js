$(document).ready(function () {
    var before = $(window).scrollTop();
    $(window).scroll(function () {
        var after = $(window).scrollTop();
        if (before < after) {
            $('.situation__bt').stop().fadeOut()
            before = after;
        };
        if (before > after) {
            $('.situation__bt').stop().fadeIn()
            before = after;
        };
    });
    $(window).scroll(function () {
        last = $("body").height() - $(window).height()
        if ($(window).scrollTop() >= last) {
            $('.situation__bt').stop().fadeOut()
        }
    })


    /**寫入資料**/
    $('.gameData__submit').click(function () {
        var date = $('.date').val();
        var gameType = $('.gameType').val();
        var frequency = $('.frequency').val();
        var league = $('.league').val();
        var place = $('.place').val();
        var adversary = $('.adversary').val();
        var weather = $('.weather').val();
        var docName = gameType + date + '-' + frequency;
        console.log(docName);
        db.collection('gameName').doc(docName).set({
            league: league,
            place: place,
            adversary: adversary,
            weather: weather
        });
        db.collection("game").doc(docName).set({});
        $('.gameData').hide();
        $('.game').fadeIn();
    });
    $('.game_submit').click(function () {
        var date = $('.date').val();
        var gameType = $('.gameType').val();
        var frequency = $('.frequency').val();
        var docName = gameType + date + '-' + frequency;
        //
        var pitcher = $('.pitcher').val();
        var hobit_h = $('.hobit_h').val();
        var hit = $('.hit').val();
        var situation = $('.situation').val();
        var result = $('.result').val();
        var direction = $('.direction').val();
        var hit_type = $('.hit_type').val();
        db.collection("game").doc(docName).update({
            pitcher: pitcher,
            hobit_h: hobit_h,
            hit: hit,
            situation: situation,
            result: result,
            direction: direction,
            hit_type: hit_type
        });
    });
});