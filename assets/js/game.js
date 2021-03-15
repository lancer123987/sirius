$(document).ready(function() {
    let ref = db.collection('game');
    let boxGame = [];
    let boxEnemy = [];
    let boxPlace = [];
    let boxScore = [];
    let boxHome = [];
    ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            boxGame.push(doc.id);
            boxEnemy.push(doc.data().對手);
            boxPlace.push(doc.data().場地);
            boxScore.push(doc.data().比數);
            boxHome.push(doc.data().主客場);
            let gameDate = doc.id.replaceAll('-', '/');
            gameDate = gameDate.slice(0, gameDate.length - 2);

            if (doc.data().主客場 == false) {
                $('#game').append('<a class=\"game__item\" href=\"game_detail.html?game' + doc.id + '\"><p class=\"game__item__team\"><span class=\"game__item__team__away\">Sirius</span>VS<span class=\"game__item__team__home\">' + doc.data().對手 + '</span></p><p class=\"game__item__score\">' + doc.data().比數 + '</p><p class=\"game__item__place\">' + doc.data().場地 + '</p><p class=\"game__item__date\">' + gameDate + '</p></a>');
            } else {
                $('#game').append('<a class=\"game__item\" href=\"game_detail.html?game' + doc.id + '\"><p class=\"game__item__team\"><span class=\"game__item__team__away\">' + doc.data().對手 + '</span>VS<span class=\"game__item__team__home\">Sirius</span></p><p class=\"game__item__score\">' + doc.data().比數 + '</p><p class=\"game__item__place\">' + doc.data().場地 + '</p><p class=\"game__item__date\">' + gameDate + '</p></a>');
            }
        });
        $('.c-loading').fadeOut();
    });
});