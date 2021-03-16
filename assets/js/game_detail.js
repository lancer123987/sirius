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
        let boxInner = doc.data().比賽局數;

        gameId = gameId.replaceAll('-', '/');
        gameId = gameId.slice(0, gameId.length - 2);

        //比賽日期
        $('.game__date').text(gameId);

        //主客場名稱
        if (boxHome == false) {
            $('#awayName').text('Sirius');
            $('#homeName').text(boxEnemy);
        } else {
            $('#homeName').text('Sirius');
            $('#awayName').text(boxEnemy);
        }

        //總比數
        boxScore = boxScore.split(':');
        $('.game__board__block__awayScroe').text(boxScore[0]);
        $('.game__board__block__homeScroe').text(boxScore[1]);
        for (var i = 1; i < boxInner + 1; i++) {
            $('.game').append('<div id="t0' + i + '" class=\"game__content\"><h3 class=\"game__content__title\">' + i + '上<span class=\"game__content__title__score\"></span></h3><div class=\"game__content__inner\"><div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">打者</p><p class=\"game__content__inner__item__pitcher\">投手</p><p class=\"game__content__inner__item__process\">過程</p><p class=\"game__content__inner__item__direction\">方向</p><p class=\"game__content__inner__item__result\">結果</p><p class=\"game__content__inner__item__remark\">備註</p><p class=\"game__content__inner__item__score\">得分</p></div></div></div><div id="b0' + i + '" class=\"game__content\"><h3 class=\"game__content__title\">' + i + '下<span class=\"game__content__title__score\"></span></h3><div class=\"game__content__inner\"><div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">打者</p><p class=\"game__content__inner__item__pitcher\">投手</p><p class=\"game__content__inner__item__process\">過程</p><p class=\"game__content__inner__item__direction\">方向</p><p class=\"game__content__inner__item__result\">結果</p><p class=\"game__content__inner__item__remark\">備註</p><p class=\"game__content__inner__item__score\">得分</p></div></div></div>');
        }
        for (var i = 1; i < boxInner + 1; i++) {
            let innerT = 't0' + i;
            let innerB = 'b0' + i;
            let innerTId = '#' + innerT;
            let innerBId = '#' + innerB;
            let boardScroeT = '.game__board__block__' + innerT;
            let boardScroeB = '.game__board__block__' + innerB;

            ref.collection(innerT).get().then(querySnapshot => {
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
                    $(innerTId).find('.game__content__title__score').text(scoreTatal.reduce((a, b) => a + b));
                    $(boardScroeT).text(scoreTatal.reduce((a, b) => a + b));

                    $(innerTId).append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

                });
            });
            ref.collection(innerB).get().then(querySnapshot => {
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
                    $(innerBId).find('.game__content__title__score').text(scoreTatal.reduce((a, b) => a + b));
                    $(boardScroeB).text(scoreTatal.reduce((a, b) => a + b));

                    $(innerBId).append('<div class=\"game__content__inner__item\"><p class=\"game__content__inner__item__hit\">' + hitter + '</p><p class=\"game__content__inner__item__pitcher\">' + pitcher + '</p><p class=\"game__content__inner__item__process\">' + process + '</p><p class=\"game__content__inner__item__direction\">' + direction + '</p><p class=\"game__content__inner__item__result\">' + result + '</p><p class=\"game__content__inner__item__remark\">' + remark + '</p><p class=\"game__content__inner__item__score\">' + score + '</p></div></div></div>');

                });
            });
        }
        $('.c-loading').fadeOut();
    });
});