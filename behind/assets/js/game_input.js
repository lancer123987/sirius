$(document).ready(function() {
    var before = $(window).scrollTop();
    $(window).scroll(function() {
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
    $(window).scroll(function() {
        last = $("body").height() - $(window).height()
        if ($(window).scrollTop() >= last) {
            $('.situation__bt').stop().fadeOut()
        }
    })

    /**讀取資料 & 選項渲染**/
    var ref = db.collection('gameType');
    ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            $('#gameType').append('<option value=\"' + doc.id + '\">' + doc.id + '<\/option>');
        });
    });

    var placeRef = db.collection('code').doc('place');
    placeRef.get().then(doc => {
        let place = doc.data().place;
        for (var i = 0; i < place.length; i++) {
            $('#place').append('<option value=\"' + place[i] + '\">' + place[i] + '<\/option>')
        }
    });

    $('#gameType').change(function() {
        $('#gameYear').find('option').remove();
        let league = $(this).val();
        var ref = db.collection('gameType').doc(league);
        ref.get().then(doc => {
            let gameYear = doc.data().year;
            for (var i = gameYear.length - 1; i > -1; i--) {
                $('#gameYear').append('<option value=\"' + gameYear[i] + '\">' + gameYear[i] + '<\/option>')
            }
        });
        $('#gameYear').show();
    });


    /**寫入資料**/

    //比賽基本資訊
    $('.gameData__submit').click(function() {
        let date = $('.date').val(); //日期
        let gameType = $('#gameType').val(); //比賽類型
        let gameYear = $('#gameYear').val(); //比賽年度
        let frequency = $('.frequency').val(); //單日比賽場次
        let docName = date + '-' + frequency; //比賽id建立
        let place = $('.place').val(); //場地名稱
        let adversary = $('.adversary').val(); //對手名稱
        let home = $('.home').val(); //主客場
        if ('true' == home) {
            home = true;
        } else {
            home = false;
        }
        let weather = $('.weather').val(); //天氣

        db.collection("game").doc(docName).set({
            比賽聯盟: gameType,
            比賽年度: gameYear,
            場地: place,
            對手: adversary,
            天氣: weather,
            主客場: home
        });
        $('.gameData').hide();
        $('.game').fadeIn();
    });

    //比賽內容
    $('.game_submit').click(function() {
        let date = $('.date').val(); //日期
        let frequency = $('.frequency').val(); //單日比賽場次
        let docName = date + '-' + frequency; //比賽id建立

        let round = $('.round').val(); //當前局數
        let roundTurn = $('.round__turn').val(); //上下半局

        let roundName = roundTurn + round;

        let pitcher = $('.pitcher').val(); //投手背號
        let hitterId = $('.hitterId').val(); //當局打序
        let hobit_h = $('.hobit_h').val(); //打者左右打
        let hit = $('.hit').val(); //打者背號
        let process = $('.process').val(); //過程
        let result = $('.result').val(); //結果
        let direction = $('.direction').val(); //方向
        let hit_type = $('.hit_type').val(); //擊出結果
        let remark = $('.remark').val(); //備註
        let score = parseInt($('.score').val()); //得分

        function hitterIdChange(i) {
            if (hitterId.length === 1) {
                hitterId = "0" + hitterId;
                console.log(hitterId);
                return hitterId;
            }
        }

        hitterIdChange(hitterId);

        console.log(hitterId + 'haha');

        db.collection("game").doc(docName).collection(roundName).doc('hitter' + hitterId).set({
            投手: pitcher,
            左右打: hobit_h,
            打者: hit,
            過程: process,
            結果: result,
            方向: direction,
            擊出結果: hit_type,
            備註: remark,
            分數: score
        });
        $('.hit, .process, .remark, .score').val('');
    });

    //過程輸入
    $('.situation__bt__item').click(function() {
        let ball = $(this).data('value');
        let process = $('.process').val() + ball;
        $('.process').val(process);
    });
});