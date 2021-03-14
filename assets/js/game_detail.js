$(document).ready(function() {
    // $('.game__content__title').click(function() {
    //     $(this).next('.game__content__inner').stop().slideToggle();
    // });

    let gameId = location.href.split('game_detail.html?game')[1];

    let ref = db.collection('game').doc(gameId);
    ref.get().then(doc => {
        let boxEnemy = doc.data().對手;
        let boxPlace = doc.data().場地;
        let boxScore = doc.data().比數;
        let boxHome = doc.data().主客場;

        gameId = gameId.replaceAll('-', '/');
        gameId = gameId.slice(0, gameId.length - 2);

        //比賽日期
        $('.game__date').text(gameId);

        //主客場名稱
        if (boxHome == false) {
            $('#awayName').text('Siriuss');
            $('#homeName').text(boxEnemy);
        } else {
            $('#homeName').text('Siriuss');
            $('#awayName').text(boxEnemy);
        }

        //總比數
        boxScore = boxScore.split(':');
        $('.game__board__block__awayScroe').text(boxScore[0]);
        $('.game__board__block__homeScroe').text(boxScore[1]);

    });

    let t01 = db.collection('game').doc(gameId).collection('t01');
    t01.get().then(querySnapshot => {
        let scoreTatal = [];
        querySnapshot.forEach(doc => {

            let hitter = doc.data().打者;
            let pitcher = doc.data().投手;
            let process = doc.data().過程;
            let direction = doc.data().方向;
            let result = doc.data().擊出結果;
            let remark = doc.data().備註;
            let score = doc.data().分數;

            scoreTatal.push(doc.data().分數);
            $('#t01 .game__content__title__score').text(scoreTatal.reduce((a, b) => a + b));
            $('.game__board__block__t01').text(scoreTatal.reduce((a, b) => a + b));

            $('#t01').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let b01 = db.collection('game').doc(gameId).collection('b01');
    b01.get().then(querySnapshot => {
        let scoreTatal = [];
        querySnapshot.forEach(doc => {

            let hitter = doc.data().打者;
            let pitcher = doc.data().投手;
            let process = doc.data().過程;
            let direction = doc.data().方向;
            let result = doc.data().擊出結果;
            let remark = doc.data().備註;
            let score = doc.data().分數;

            scoreTatal.push(doc.data().分數);
            $('#b01 .game__content__title__score').text(scoreTatal.reduce((a, b) => a + b));
            $('.game__board__block__b01').text(scoreTatal.reduce((a, b) => a + b));

            $('#b01').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');
        });
    });
    let t02 = db.collection('game').doc(gameId).collection('t02');
    t02.get().then(querySnapshot => {
        let scoreTatal = [];
        querySnapshot.forEach(doc => {

            let hitter = doc.data().打者;
            let pitcher = doc.data().投手;
            let process = doc.data().過程;
            let direction = doc.data().方向;
            let result = doc.data().擊出結果;
            let remark = doc.data().備註;
            let score = doc.data().分數;

            scoreTatal.push(doc.data().分數);
            $('#t02 .game__content__title__score').text(scoreTatal.reduce((a, b) => a + b));
            $('.game__board__block__t02').text(scoreTatal.reduce((a, b) => a + b));

            $('#t02').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let b02 = db.collection('game').doc(gameId).collection('b02');
    b02.get().then(querySnapshot => {
        let scoreTatal = [];
        querySnapshot.forEach(doc => {

            let hitter = doc.data().打者;
            let pitcher = doc.data().投手;
            let process = doc.data().過程;
            let direction = doc.data().方向;
            let result = doc.data().擊出結果;
            let remark = doc.data().備註;
            let score = doc.data().分數;

            scoreTatal.push(doc.data().分數);
            $('#b02 .game__content__title__score').text(scoreTatal.reduce((a, b) => a + b));
            $('.game__board__block__b02').text(scoreTatal.reduce((a, b) => a + b));

            $('#b02').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let t03 = db.collection('game').doc(gameId).collection('t03');
    t03.get().then(querySnapshot => {
        let scoreTatal = [];
        querySnapshot.forEach(doc => {

            let hitter = doc.data().打者;
            let pitcher = doc.data().投手;
            let process = doc.data().過程;
            let direction = doc.data().方向;
            let result = doc.data().擊出結果;
            let remark = doc.data().備註;
            let score = doc.data().分數;

            scoreTatal.push(doc.data().分數);
            $('#t03 .game__content__title__score').text(scoreTatal.reduce((a, b) => a + b));
            $('.game__board__block__t03').text(scoreTatal.reduce((a, b) => a + b));

            $('#t03').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let b03 = db.collection('game').doc(gameId).collection('b03');
    b03.get().then(querySnapshot => {
        let scoreTatal = [];
        querySnapshot.forEach(doc => {

            let hitter = doc.data().打者;
            let pitcher = doc.data().投手;
            let process = doc.data().過程;
            let direction = doc.data().方向;
            let result = doc.data().擊出結果;
            let remark = doc.data().備註;
            let score = doc.data().分數;

            scoreTatal.push(doc.data().分數);
            $('#b03 .game__content__title__score').text(scoreTatal.reduce((a, b) => a + b));
            $('.game__board__block__b03').text(scoreTatal.reduce((a, b) => a + b));

            $('#b03').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let t04 = db.collection('game').doc(gameId).collection('t04');
    t04.get().then(querySnapshot => {
        let scoreTatal = [];
        querySnapshot.forEach(doc => {

            let hitter = doc.data().打者;
            let pitcher = doc.data().投手;
            let process = doc.data().過程;
            let direction = doc.data().方向;
            let result = doc.data().擊出結果;
            let remark = doc.data().備註;
            let score = doc.data().分數;

            scoreTatal.push(doc.data().分數);
            $('#t04 .game__content__title__score').text(scoreTatal.reduce((a, b) => a + b));
            $('.game__board__block__t04').text(scoreTatal.reduce((a, b) => a + b));

            $('#t04').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let b04 = db.collection('game').doc(gameId).collection('b04');
    b04.get().then(querySnapshot => {
        let scoreTatal = [];
        querySnapshot.forEach(doc => {

            let hitter = doc.data().打者;
            let pitcher = doc.data().投手;
            let process = doc.data().過程;
            let direction = doc.data().方向;
            let result = doc.data().擊出結果;
            let remark = doc.data().備註;
            let score = doc.data().分數;

            scoreTatal.push(doc.data().分數);
            $('#b04 .game__content__title__score').text(scoreTatal.reduce((a, b) => a + b));
            $('.game__board__block__b04').text(scoreTatal.reduce((a, b) => a + b));

            $('#b04').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let t05 = db.collection('game').doc(gameId).collection('t05');
    t05.get().then(querySnapshot => {
        let scoreTatal = [];
        querySnapshot.forEach(doc => {

            let hitter = doc.data().打者;
            let pitcher = doc.data().投手;
            let process = doc.data().過程;
            let direction = doc.data().方向;
            let result = doc.data().擊出結果;
            let remark = doc.data().備註;
            let score = doc.data().分數;

            scoreTatal.push(doc.data().分數);
            $('#t05 .game__content__title__score').text(scoreTatal.reduce((a, b) => a + b));
            $('.game__board__block__t05').text(scoreTatal.reduce((a, b) => a + b));

            $('#t05').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
    });
    let b05 = db.collection('game').doc(gameId).collection('b05');
    b05.get().then(querySnapshot => {
        let scoreTatal = [];
        querySnapshot.forEach(doc => {

            let hitter = doc.data().打者;
            let pitcher = doc.data().投手;
            let process = doc.data().過程;
            let direction = doc.data().方向;
            let result = doc.data().擊出結果;
            let remark = doc.data().備註;
            let score = doc.data().分數;

            scoreTatal.push(doc.data().分數);
            $('#b05 .game__content__title__score').text(scoreTatal.reduce((a, b) => a + b));
            $('.game__board__block__b05').text(scoreTatal.reduce((a, b) => a + b));

            $('#b05').append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

        });
        $('.c-loading').fadeOut();
    });
});