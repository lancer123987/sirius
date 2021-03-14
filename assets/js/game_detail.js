$(document).ready(function() {
    // $('.game__content__title').click(function() {
    //     $(this).next('.game__content__inner').stop().slideToggle();
    // });

    let gameId = location.href.split('game_detail.html?game')[1];

    //比賽日期
    //$('.game__date').text(gameId);

    let ref = db.collection('game').doc(gameId);
    let boxEnemy = [];
    let boxPlace = [];
    let boxScore = [];
    let boxHome = [];
    ref.get().then(doc => {
        boxEnemy.push(doc.data().對手);
        boxPlace.push(doc.data().場地);
        boxScore.push(doc.data().比數);
        boxHome.push(doc.data().主客場);

        gameId = gameId.replaceAll('-', '/');
        gameId = gameId.slice(0, gameId.length - 2);

        //比賽日期
        $('.game__date').text(gameId);

        //主客場名稱
        if (boxHome == false) {
            $('#awayName').text('Siriuss');
            $('#homeName').text(doc.data().對手);
        } else {
            $('#homeName').text('Siriuss');
            $('#awayName').text(doc.data().對手);
        }
    });

    let t01 = db.collection('game').doc(gameId).collection('t01');
    t01.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            let hitter = [];
            let pitcher = [];
            let process = [];
            let direction = [];
            let result = [];
            let remark = [];
            let score = [];
            hitter = doc.data().打者;
            pitcher = doc.data().投手;
            process = doc.data().過程;
            direction = doc.data().方向;
            result = doc.data().擊出結果;
            remark = doc.data().備註;
            score = doc.data().分數;

            $('#t01').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let b01 = db.collection('game').doc(gameId).collection('b01');
    b01.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            let hitter = [];
            let pitcher = [];
            let process = [];
            let direction = [];
            let result = [];
            let remark = [];
            let score = [];
            hitter = doc.data().打者;
            pitcher = doc.data().投手;
            process = doc.data().過程;
            direction = doc.data().方向;
            result = doc.data().擊出結果;
            remark = doc.data().備註;
            score = doc.data().分數;

            $('#b01').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');
        });
    });
    let t02 = db.collection('game').doc(gameId).collection('t02');
    t02.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            let hitter = [];
            let pitcher = [];
            let process = [];
            let direction = [];
            let result = [];
            let remark = [];
            let score = [];
            hitter = doc.data().打者;
            pitcher = doc.data().投手;
            process = doc.data().過程;
            direction = doc.data().方向;
            result = doc.data().擊出結果;
            remark = doc.data().備註;
            score = doc.data().分數;

            $('#t02').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let b02 = db.collection('game').doc(gameId).collection('b02');
    b02.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            let hitter = [];
            let pitcher = [];
            let process = [];
            let direction = [];
            let result = [];
            let remark = [];
            let score = [];
            hitter = doc.data().打者;
            pitcher = doc.data().投手;
            process = doc.data().過程;
            direction = doc.data().方向;
            result = doc.data().擊出結果;
            remark = doc.data().備註;
            score = doc.data().分數;
            $('#b02').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let t03 = db.collection('game').doc(gameId).collection('t03');
    t03.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            let hitter = [];
            let pitcher = [];
            let process = [];
            let direction = [];
            let result = [];
            let remark = [];
            let score = [];
            hitter = doc.data().打者;
            pitcher = doc.data().投手;
            process = doc.data().過程;
            direction = doc.data().方向;
            result = doc.data().擊出結果;
            remark = doc.data().備註;
            score = doc.data().分數;

            $('#t03').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let b03 = db.collection('game').doc(gameId).collection('b03');
    b03.get().then(querySnapshot => {
        let hitter = [];
        let pitcher = [];
        let process = [];
        let direction = [];
        let result = [];
        let remark = [];
        let score = [];
        querySnapshot.forEach(doc => {
            hitter = doc.data().打者;
            pitcher = doc.data().投手;
            process = doc.data().過程;
            direction = doc.data().方向;
            result = doc.data().擊出結果;
            remark = doc.data().備註;
            score = doc.data().分數;

            $('#b03').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let t04 = db.collection('game').doc(gameId).collection('t04');
    t04.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            let hitter = [];
            let pitcher = [];
            let process = [];
            let direction = [];
            let result = [];
            let remark = [];
            let score = [];
            hitter = doc.data().打者;
            pitcher = doc.data().投手;
            process = doc.data().過程;
            direction = doc.data().方向;
            result = doc.data().擊出結果;
            remark = doc.data().備註;
            score = doc.data().分數;

            $('#t04').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let b04 = db.collection('game').doc(gameId).collection('b04');
    b04.get().then(querySnapshot => {
        let hitter = [];
        let pitcher = [];
        let process = [];
        let direction = [];
        let result = [];
        let remark = [];
        let score = [];
        querySnapshot.forEach(doc => {
            hitter = doc.data().打者;
            pitcher = doc.data().投手;
            process = doc.data().過程;
            direction = doc.data().方向;
            result = doc.data().擊出結果;
            remark = doc.data().備註;
            score = doc.data().分數;

            $('#b04').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let t05 = db.collection('game').doc(gameId).collection('t05');
    t05.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            let hitter = [];
            let pitcher = [];
            let process = [];
            let direction = [];
            let result = [];
            let remark = [];
            let score = [];
            hitter = doc.data().打者;
            pitcher = doc.data().投手;
            process = doc.data().過程;
            direction = doc.data().方向;
            result = doc.data().擊出結果;
            remark = doc.data().備註;
            score = doc.data().分數;

            $('#t05').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let b05 = db.collection('game').doc(gameId).collection('b05');
    b05.get().then(querySnapshot => {
        let hitter = [];
        let pitcher = [];
        let process = [];
        let direction = [];
        let result = [];
        let remark = [];
        let score = [];
        querySnapshot.forEach(doc => {
            hitter = doc.data().打者;
            pitcher = doc.data().投手;
            process = doc.data().過程;
            direction = doc.data().方向;
            result = doc.data().擊出結果;
            remark = doc.data().備註;
            score = doc.data().分數;

            $('#b05').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
        $('.c-loading').fadeOut();
    });
});